import styled from 'styled-components/native';

import { Dimensions} from "react-native"

const width = Dimensions.get('window')

export const Container = styled.View`
    width: 100%;
    height: 20%;

    padding: 60px 24px 8px 24px;
    background-color: #820AD1;
`;

export const UpperView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const UserIconView = styled.View`
    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;

    border-radius: 99px;
    background-color: #A75DD9;
`;

export const OptionsIcon = styled.View`
    flex-direction: row;
`;

export const TitleUser = styled.Text`
    font-size: 16px;
    color: #fff;

    margin-top: 20px;
`;

export const TotalBalance = styled.View`
    padding: 20px;
`;

export const AcountView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Subtitle = styled.Text`
    font-size: 15px;
`;

export const BalanceTotal = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
`;

export const BalanceTotalNotVisible = styled.View`
    margin-top: 8px;

    width: 70%;
    height: 30px;

    background-color: #c1bec2;

    border-radius: 2px;
`;

export const Oie = styled.View`
    align-items: center;
    justify-content: center;
`;

export const OptionIcon = styled.View`
    width: 60px;
    height: 60px;

    background-color: #e6e6e6;

    border-radius: 99px;

    align-items: center;
    justify-content: center;

    margin: 0 10px;
`;

export const OptionText = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;




