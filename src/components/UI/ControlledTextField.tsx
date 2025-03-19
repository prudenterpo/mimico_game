import React, { useRef, useEffect } from "react";
import { Controller, Control } from "react-hook-form";
import { CustomTextField } from "@/components/UI/CustomTextField";

interface ControlledTextFieldProps {
    name: string;
    label: string;
    control: Control<any>;
    type?: string;
    autoFocus?: boolean;
    fullWidth?: boolean;
}

export const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
    name,
    label,
    control,
    type = "text",
    autoFocus = true,
    fullWidth = true,
}) => {
    // Ensures the input field inside the modal gains focus automatically when the modal opens.
    const inputRef = useRef<HTMLInputElement | undefined>(undefined);
    useEffect(() => {
        if (autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState }) => (
                <CustomTextField
                    {...field}
                    label={label}
                    type={type}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    inputRef={inputRef}
                    fullWidth={fullWidth}
                />
            )}
        />
    );
};
