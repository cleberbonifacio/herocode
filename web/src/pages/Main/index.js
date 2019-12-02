import React, { Component } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import api from '~/services/api';

import {
  Container,
  NomePersonagem,
  ButtonLeft,
  ButtonRight,
  Pagination,
  PageAtual,
  Pages,
  Footer,
} from './styles';
import { timeout } from 'q';

export default class Main extends Component {
  state = {
    herois: [],
    page: 1,
    limit: 4,
  };

  // Carrega os dados vindos da API MARVEl
  async componentDidMount() {
    const response = await api.get();
    console.log(response.data.data.results);
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

  // Busca nome do personagem
  searchFilterFunction = async e => {

    const response = await api.get(`&name=${e.target.value}`);
    if( response.data.data.results.length > 0){
      this.setState({ herois: response.data.data.results })
    }

  };

  render() {
    const { limit, page,herois  } = this.state;
    return (
      <Container>
        <nav>
          <h1><span>BUS</span>CA MARVEL TESTE FRONT-END</h1> <h2>CLEBER BONIFACIO</h2>
        </nav>
        <h3>Nome do personagem</h3>
        <input name="busca" type="text" onChange={this.searchFilterFunction}/>
        <table className="table">
          <thead>
            <tr>
              <th>Personagem</th>
              <th>Séries</th>
              <th>Eventos</th>
            </tr>
          </thead>
          <tbody>
          {herois.map(item => (
            <tr key={item.id} >
              <td>
              <img src={item.thumbnail.path + '/standard_fantastic.' + item.thumbnail.extension} alt={item.name} />
              {item.name}
              </td>
              <td>
              {item.series.items.slice(0,3).map(serie => (
               <p>{serie.name}</p>
              ))}
              </td>
              <td>
              {item.stories.items.slice(0,3).map(storie => (
               <p>{storie.name}</p>
              ))}
              </td>
            </tr>
          ))}

          </tbody>
        </table>
        <Pagination>
          <ButtonLeft
            type="button"
            disabled={limit <= 4}
            onClick={() => this.handlePage('back')}
          >
            <FaCaretLeft size={35} color="#d42026" />
          </ButtonLeft>
          <PageAtual
            disabled={limit < 4}
            onClick={() => this.handlePageCurrent(limit - 4)}
          >
            {limit / 4}
          </PageAtual>
          <Pages onClick={() => this.handlePageCurrent(limit + 4)}>
            {(limit + 4) / 4}
          </Pages>
          <Pages onClick={() => this.handlePageCurrent(limit + 8)}>
            {(limit + 8) / 4}
          </Pages>
          <ButtonRight type="button" onClick={() => this.handlePage('next')}>
            <FaCaretRight size={35} color="#d42026" />
          </ButtonRight>
        </Pagination>
        <Footer />
      </Container>
    );
  }
}
