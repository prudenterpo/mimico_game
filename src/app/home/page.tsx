"use client";

import { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import { CustomButton } from "@/components/UI/CustomButton";
import CodeEntryModal from "@/components/modals/CodeEntryModal";
import Image from "next/image";

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Container
            maxWidth="md"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                textAlign: "center",
            }}
        >
            <Image src="/logo.png" alt="Mímico Logo" width={150} height={150} />

            <Typography variant="h2" fontWeight="bold">
                Mímico
            </Typography>

            <Typography variant="h5">Faça a sua melhor mímica!</Typography>

            <Typography variant="body1" maxWidth="sm" sx={{ mb: 3 }}>
                Desafie seus amigos em um jogo de mímica ao vivo por videochamada. Forme equipes,
                jogue o dado e avance no tabuleiro adivinhando gestos antes que o tempo acabe. Quem chegará ao fim primeiro?
            </Typography>

            <Box display="flex" flexDirection="column" gap={2} width="100%" maxWidth="300px">
                <CustomButton variant="contained" fullWidth onClick={() => setIsModalOpen(true)}>
                    Entrar com código
                </CustomButton>
                <CustomButton variant="outlined" fullWidth>
                    Criar sala
                </CustomButton>
            </Box>

            <CodeEntryModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={(code) => {
                    console.log("Código inserido:", code);
                    setIsModalOpen(false);
                }}
            />
        </Container>
    );
}
