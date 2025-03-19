import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { ReactNode } from "react";

interface CustomModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    actions?: ReactNode;
}

export const CustomModal = ({ isOpen, onClose, title, children, actions }: CustomModalProps) => {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
        >
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent>{children}</DialogContent>
            {actions && <DialogActions>{actions}</DialogActions>}
        </Dialog>
    );
};
