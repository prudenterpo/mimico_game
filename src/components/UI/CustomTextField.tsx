import React, {RefObject} from 'react';
import TextField from '@mui/material/TextField';

interface CustomTextFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    autoFocus?: boolean;
    inputRef?: RefObject<HTMLInputElement | undefined>;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    fullWidth = true,
    disabled = false,
    error = false,
    helperText = '',
    autoFocus = false,
    inputRef
}) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            fullWidth={fullWidth}
            disabled={disabled}
            error={error}
            helperText={helperText}
            variant="outlined"
            inputRef={inputRef}
            autoFocus={autoFocus}
        />
    );
};
