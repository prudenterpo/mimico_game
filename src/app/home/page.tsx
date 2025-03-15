import React from 'react';
import { Container, Typography } from '@mui/material';
import { CustomCard } from '@/components/UI/CustomCard';

export default function HomePage() {
  return (
      <Container maxWidth="sm">
        <Typography variant="h3" gutterBottom>
          Teste do CustomCard
        </Typography>
        <CustomCard title="Sala de Jogo" content="Clique para entrar nesta sala!" />
        <CustomCard title="Histórico" content="Últimos jogos disputados." />
      </Container>
  );
}
