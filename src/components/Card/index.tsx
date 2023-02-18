import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Container, ContentText } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
        <Ionicons name='card-outline' size={20} color= "#000" />
        <ContentText>Meus cartões</ContentText>
    </Container>
  )
}

export default Card;