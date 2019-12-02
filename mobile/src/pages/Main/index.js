import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import api from '../../services/api';
import {
  Container,
  Title,
  Span,
  Sublinhado,
  Input,
  Nomehero,
  TituloList,
  Herois,
  Personagem,
  Avatar,
  Info,
  Nome,
  Pagination,
  LeftButton,
  RightButton,
  Pages,
  PageAtual,
  FinalList,
} from './styles';

export default class Main extends Component {
  static propTypes = {
    params: PropTypes.shape({
      herois: PropTypes.string,
    }).isRequired,
  };

  state = {
    herois: [],
    limit: 4,
  };

  // Carrega os dados vindos da API MARVEl
  async componentDidMount() {
    const response = await api.get();
    this.setState({
      herois: response.data.data.results,
    });
  }

  // Carrega os dados da API com limites de paginação
  loadIssues = async () => {
    const { limit } = this.state;
    const response = await api.get(`&offset=${limit}`);
    this.setState({ herois: response.data.data.results });
  };

  // Controle da Paginação
  handlePage = async action => {
    const { page, limit } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
      limit: action === 'back' ? limit - 4 : limit + 4,
    });
    this.loadIssues();
  };

  // Controle de paginação da pagina atual
  handlePageCurrent = async action => {
    const { page, limit } = this.state;
    await this.setState({
      page: action === 'back' ? page - 1 : page + 1,
      limit: action,
    });
    this.loadIssues();
  };

  searchFilterFunction = async e => {
    const response = await api.get(`&name=${e}`);
    if (response.data.data.results.length > 0) {
      this.setState({ herois: response.data.data.results });
    }
  };

  render() {
    const { herois, limit } = this.state;
    return (
      <Container>
        <Title>
          <Span>
            <Sublinhado>BUSCA</Sublinhado> MARVEL
          </Span>
          TESTE FRONT-END
        </Title>
        <Nomehero>Nome do Personagem</Nomehero>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="send"
          onChangeText={text => this.searchFilterFunction(text)}
        />
        <TituloList>Nome</TituloList>
        <Herois
          data={herois}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Personagem>
              <Avatar
                source={{
                  uri: `${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`,
                }}
              />
              <Info>
                <Nome>{item.name}</Nome>
              </Info>
            </Personagem>
          )}
        />
        <Pagination>
          <LeftButton
            disabled={limit < 4}
            onPress={() => this.handlePage('back')}
          >
            <Icon name="caretleft" size={30} color="#d42026" />
          </LeftButton>
          <PageAtual
            disabled={limit < 4}
            onPress={() => this.handlePageCurrent(limit - 4)}
          >
            {limit / 4}
          </PageAtual>
          <Pages onPress={() => this.handlePageCurrent(limit + 4)}>
            {(limit + 4) / 4}
          </Pages>
          <Pages onPress={() => this.handlePageCurrent(limit + 8)}>
            {(limit + 8) / 4}
          </Pages>
          <RightButton onPress={() => this.handlePage('next')}>
            <Icon name="caretright" size={30} color="#d42026" />
          </RightButton>
        </Pagination>
        <FinalList />
      </Container>
    );
  }
}
