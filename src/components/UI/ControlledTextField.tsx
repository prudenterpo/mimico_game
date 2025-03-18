import React from "react";
import {Controller, Control} from "react-hook-form";
import {CustomTextField} from "@/components/UI/CustomTextField";

interface ControlledTextFieldProps {
    name: string;
    label: string;
    control: Control<any>;
    type?: string;
}

export const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
    name,
    label,
    control,
    type = "text"
}) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({field, fieldState}) => (
                <CustomTextField
                    {...field}
                    label={label}
                    type={type}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                />
            )}
        />
    );
};
