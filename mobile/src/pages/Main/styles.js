import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  margin-left: 35px;
  color: #d42026;
  font-size: 16px;
  margin-top: 12px;
`;

export const Span = styled.Text`
  font-weight: bold;
`;

export const Sublinhado = styled.Text`
  text-decoration: underline;
  border-bottom-width: 3px;
  border-color: #d42026;
`;

export const Input = styled.TextInput`
  margin: 0 35px 12px 35px;
  height: 40px;
  border-radius: 6px;
  padding: 0 15px;
  border: 1px solid #9e9e9e;
`;

export const Nomehero = styled.Text`
  margin-left: 35px;
  margin-right: 30px;
  padding-top: 12px;
  padding-bottom: 5px;
  color: #d42026;
  font-size: 16px;
`;

export const TituloList = styled.Text`
  background-color: #d42026;
  height: 40px;
  padding: 10px 120px;
  font-size: 16px;
  color: #fff;
`;

export const Herois = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Personagem = styled.View`
  padding: 17px 19px;

  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #d42026;
`;

export const Avatar = styled.Image`
  margin-left: 12px;
  height: 58px;
  width: 58px;
  border-radius: 29px;
`;

export const Info = styled.Text`
  margin-left: 30px;
  flex: 1;
`;

export const Nome = styled.Text`
  font-size: 23px;
`;

export const LeftButton = styled.TouchableOpacity`
  left: -50px;
`;
export const RightButton = styled.TouchableOpacity`
  left: 50px;
`;
export const Pagination = styled.View`
  flex-direction: row;
  padding: 17px 19px;
  align-items: center;
  justify-content: center;
`;

export const Pages = styled.Text`
  color: #d42026;
  border-width: 1;
  border-color: #d42026;
  width: 30;
  height: 30;
  border-radius: 15;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  text-align: center;
  margin-left: 22px;
`;
export const PageAtual = styled.Text`
  background-color: #d42026;
  color: #fff;
  width: 30;
  height: 30;
  border-radius: 15;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  text-align: center;
`;
export const FinalList = styled.Text`
  background-color: #d42026;
  margin-top: 10px;
  height: 10px;
`;
