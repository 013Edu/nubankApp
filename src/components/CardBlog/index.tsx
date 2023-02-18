import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { Container } from './styles';

type Props = {
    text: ReactNode,
    link: string
}

const CardBlog: React.FC<Props> = ({text, link}) => {
  return (
    <Container>
        {text}
    </Container>
  )
}

export default CardBlog;
