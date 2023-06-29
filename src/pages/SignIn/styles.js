import styled from 'styled-components'

import backgroundImg from '../../assets/backgroundCine.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: stretch;
`

export const Form = styled.form`
  padding: 163px;

  > h1 {
    color:${({ theme }) => theme.COLORS.ROSE};
    font-size: 48px;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  > h2 {
    margin-top: 48px;
    margin-bottom: 48px;
  }

  > p {
    color:${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > a {
    display: block;
    text-align: center;
    margin-top: 42px;
    color:${({ theme }) => theme.COLORS.ROSE};
  }

  > div {
    margin-bottom: 8px;
  }

  > button {
    margin-top: 24px;
  }
`

export const Background = styled.div`
  flex: 1;
  height: 100%;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`