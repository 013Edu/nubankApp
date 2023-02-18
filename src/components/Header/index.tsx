import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import {
    Container,
    UpperView,
    UserIconView,
    OptionsIcon,
    TitleUser,
    TotalBalance,
    AcountView,
    Subtitle,
    BalanceTotal,
    BalanceTotalNotVisible,
    Oie,
    OptionIcon,
    OptionText,

} from './styles';


const Header: React.FC = () => {

    const [showBalance, setShowBalance] = useState(false)

    return (
        <>
            <Container>
                <UpperView>
                    <UserIconView>
                        <Ionicons name='person-outline' size={20} color="#fff" />
                    </UserIconView>

                    <OptionsIcon>
                        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                            {
                                showBalance ? (
                                    <Ionicons name='eye-outline' size={25} color="#fff" style={{ marginRight: 12 }} />
                                ) : (
                                    <Ionicons name='eye-off-outline' size={25} color="#fff" style={{ marginRight: 12 }} />
                                )
                            }
                        </TouchableOpacity>
                        <Ionicons name='help-circle-outline' size={25} color="#fff" style={{ marginRight: 12 }} />
                        <Ionicons name='mail-outline' size={25} color="#fff" />
                    </OptionsIcon>
                </UpperView>
                <TitleUser>
                    Olá, Eduardo
                </TitleUser>
            </Container>
            <TotalBalance>
                <AcountView>
                    <Subtitle>Conta</Subtitle>
                    <Ionicons name='chevron-forward-outline' size={25} color="#908D91" />
                </AcountView>
                {
                    showBalance ? (
                        <BalanceTotal>R$ 1.353,00</BalanceTotal>
                    ) : (

                        <BalanceTotalNotVisible />
                    )
                }
            </TotalBalance>
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        padding: 10
                    }}
                >
                    <Oie>
                        <OptionIcon>
                            <Ionicons name='cash-outline' size={25} color="#000" />
                        </OptionIcon>
                        <OptionText>
                           Área Pix
                        </OptionText>
                    </Oie>
                    <Oie>
                        <OptionIcon>
                            <Ionicons name='barcode-outline' size={25} color="#000" />
                        </OptionIcon>
                        <OptionText>
                            Pagar
                        </OptionText>
                    </Oie>
                    <Oie>
                        <OptionIcon>
                            <Ionicons name='phone-portrait-outline' size={25} color="#000" />
                        </OptionIcon>
                        <OptionText>
                            Recarga
                        </OptionText>
                    </Oie>
                    <Oie>
                        <OptionIcon>
                            <Ionicons name='arrow-redo-outline' size={25} color="#000" />
                        </OptionIcon>
                        <OptionText>
                            Trasnferir
                        </OptionText>
                    </Oie>
                    <Oie>
                        <OptionIcon>
                            <Ionicons name='code-download-outline' size={25} color="#000" />
                        </OptionIcon>
                        <OptionText>
                            Depositar
                        </OptionText>
                    </Oie>
                    <Oie>
                        <OptionIcon>
                            <Feather name='dollar-sign' size={25} color="#000" />
                        </OptionIcon>
                        <OptionText>
                            Cobrar
                        </OptionText>
                    </Oie>
                    <Oie>
                        <OptionIcon>
                            <Ionicons name='bar-chart-outline' size={25} color="#000" />
                        </OptionIcon>
                        <OptionText>
                            Investir
                        </OptionText>
                    </Oie>
                    <Oie>
                        <OptionIcon>
                            <Ionicons name='albums-outline' size={25} color="#000" />
                        </OptionIcon>
                        <OptionText>
                            Caixinhas
                        </OptionText>
                    </Oie>
                </ScrollView>
            </View>
        </>
    )
}

export default Header;