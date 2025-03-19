import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material";
import colors from "@/theme/colors";

export const CustomButton = ({ children, sx, ...props }: ButtonProps) => {
    return (
        <Button
            sx={{
                backgroundColor: props.variant === "contained" ? colors.primary : "transparent",
                color: props.variant === "contained" ? colors.textSecondary : colors.primary,
                borderColor: props.variant === "outlined" ? colors.primary : "transparent",
                ...sx,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};
