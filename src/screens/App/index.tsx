import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import Card from '../../components/Card';
import CardBlog from '../../components/CardBlog';
import Header from '../../components/Header';

import {
   Container,
   CardBlogView,
   CardFunction,
   ContentFunction,
   Touchable,

  } from './styles';

const AppNubank: React.FC = () => {
  return (
    <>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
      <Header />
       <Container>
          <Card />
       </Container>
       <CardBlogView>
         <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20
          }}
         >
         <CardBlog 
          link='https://www.google.com.br/' 
          text={<Text 
          style={styles.textBlack}>Conheca Nubank vida: Seguro e simples 
          <Text style={styles.textPurple}> cabe no seu bolso</Text>
          </Text>} 
          />
           <CardBlog 
          link='https://www.google.com.br/' 
          text={<Text 
          style={styles.textBlack}>Conheca Nubank vida: Seguro e simples 
          <Text style={styles.textPurple}> cabe no seu bolso</Text>
          </Text>} 
          />
           <CardBlog 
          link='https://www.google.com.br/' 
          text={<Text 
          style={styles.textBlack}>Conheca Nubank vida: Seguro e simples 
          <Text style={styles.textPurple}> cabe no seu bolso</Text>
          </Text>} 
          />
         </ScrollView>
         <CardFunction>
            <Ionicons name='card' size={25} />
            <ContentFunction>
              <Text style={styles.subTitle}>Cartão de crédito</Text>
              <Ionicons name='chevron-forward' size={25} />
            </ContentFunction>
            <Text style={styles.textGray}>Fatura atual</Text>
            <Text style={styles.title}>R$ 300,00</Text>
            <Text style={styles.textGray}>Limite disponível de 1.500,00</Text>
            <Touchable>
              <Text style={styles.textButton}>Parcelar compras</Text>
            </Touchable>
         </CardFunction>
       </CardBlogView>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  textBlack: {
      color: '#000'
  },
  textPurple: {
      color: '#820AD1'
  },
  textGray: {
    color: '#c2bebe',
    fontWeight: 'bold',
    marginTop: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})


export default AppNubank;