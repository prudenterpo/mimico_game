import React from 'react';
import Button from '@mui/material/Button';
import {ButtonProps} from '@mui/material';

interface CustomButtonProps extends Pick<ButtonProps, 'onClick' | 'disabled' | 'size'> {
    children: React.ReactNode;
    variant?: ButtonProps['variant'];
    color?: ButtonProps['color'];
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  size = 'medium',
  type = 'button',
  fullWidth
}) => {
    return (
        <Button
            type={type}
            variant={variant}
            color={color}
            onClick={onClick}
            disabled={disabled}
            size={size}
            fullWidth={fullWidth}
        >
            {children}
        </Button>
    );
};
