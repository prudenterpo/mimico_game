import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CustomCardProps {
    title: string;
    content: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({ title, content }) => {
    return (
        <Card sx={{ minWidth: 275, padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">{content}</Typography>
            </CardContent>
        </Card>
    );
};
