import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from "react";

interface CustomCardProps extends CardProps {
    title: string;
    content: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ title, content, ...props }) => (
    <Card {...props}>
        <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body2">{content}</Typography>
        </CardContent>
    </Card>
);
