import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1800px;
  background: #fff;
  margin: 20px 42px auto;
  opacity: 100%;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center
    display: flex;
    align-items: center;

    span {
      font-weight: 700;
      border-bottom: 5px solid #d42026;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    font-size: 27px;
    color: #d42026;
  }

  h2 {
    font-weight: 400;
    font-size: 27px;
    color: #d42026;
  }

  h3 {
    font-weight: 400;
    margin-top: 34px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    color: #d42026;
    line: 19px;
  }

  p {
    margin-left: 7px;
  }

  input {
    height: 30px;
    border-radius: 6px;
    padding: 0 15px;
    width: 385px;

    border: 1px solid #a5a5a5;
  }

  table {
    margin: 24px 0;
    width: 100%;
  }

  thead {
    flex: 1;
    background: #d42026;
    color: #fff;
  }

  th {
    height: 25px;
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    padding-left: 17px;
    border-right: 10px;
    border-right-color: #fff;
    border-right-style: solid;
  }

  td {
    border-bottom: 2px solid #d42026;
    height: 112px;
    padding-left: 15px;
    font-size: 21px;
    color: #4e4e4e;

    img {
      height: 58px;
      width: 58px;
      border-radius: 29px;
      margin-right: 10px;
      margin-bottom: -20px;
    }
  }
`;

export const Borda = styled.div`
  border-bottom: 5px solid #d42026;
`;

export const ButtonLeft = styled.button`
  margin-right: 12px;
  border: 0;
  background-color: #fff;
`;

export const ButtonRight = styled.button`
  margin-left: 12px;
  border: 0;
  background-color: #fff;
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: row;
  padding: 17px 19px;
  justify-content: center;
  align-self: center;
  align-items: center;
`;

export const Pages = styled.button`
  color: #d42026;
  background-color: #fff;
  backgrouborder-width: 1;
  border-color: #d42026 !important;
  border: 1px solid #d42026 !important;
  width: 30px;
  height: 30px;
  border-radius: 15px !important;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  text-align: center;
  margin-left: 22px;
`;
export const PageAtual = styled.button`
  background-color: #d42026;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  text-align: center;
  border: 0;
`;

export const Footer = styled.div`
  height: 10px;
  background-color: #d42026;
  bottom: 0;
  margin-bottom: 0px;

  left: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
