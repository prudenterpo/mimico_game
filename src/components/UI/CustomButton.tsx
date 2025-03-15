import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material';

interface CustomButtonProps extends Pick<ButtonProps, 'onClick' | 'disabled' | 'size'> {
    children: React.ReactNode;
    variant?: ButtonProps['variant'];
    color?: ButtonProps['color'];
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    onClick,
    variant = 'contained' as ButtonProps['variant'],
    color = 'primary' as ButtonProps['color'],
    disabled = false,
    size = 'medium',
}) => {
    return (
        <Button variant={variant} color={color} onClick={onClick} disabled={disabled} size={size}>
            {children}
        </Button>
    );
};
