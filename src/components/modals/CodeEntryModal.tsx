"use client";

import {CustomModal} from "@/components/UI/CustomModal";
import {CustomButton} from "@/components/UI/CustomButton";
import {ControlledTextField} from "@/components/UI/ControlledTextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box } from "@mui/material";

interface CodeEntryProps {
    open: boolean;
    onClose: () => void;
    onConfirm: (code: string) => void;
}

interface CodeForm {
    code: string;
}

export default function CodeEntryModal({ open, onClose, onConfirm }: CodeEntryProps) {
    const { control, handleSubmit } = useForm<CodeForm>();

    const onSubmit: SubmitHandler<CodeForm> = ({ code }) => {
        onConfirm(code);
        onClose();
    };

    return (
        <CustomModal isOpen={open} onClose={onClose} title="Digite o código da sala">
            <form onSubmit={handleSubmit(onSubmit)}>
                <ControlledTextField
                    name="code"
                    label="Código"
                    control={control}
                    fullWidth
                />
                <Box display="flex" justifyContent="space-between" mt={2}>

                    <CustomButton variant="outlined" onClick={onClose}>
                        Cancelar
                    </CustomButton>

                    <CustomButton type="submit" variant="contained">
                        Confirmar
                    </CustomButton>

                </Box>
            </form>
        </CustomModal>
    );
}
