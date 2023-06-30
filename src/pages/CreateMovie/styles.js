import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  > main {
    padding: 40px 123px;
  }
`

export const Content = styled.div`

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
    text-align: center;
    font-size: 16px;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > h1 {
    margin-top: 24px;
    margin-bottom: 40px;
  }
`

export const InputArea = styled.div`

  > textarea {
    margin-top: 40px;
    margin-bottom: 40px;

    width: 100%;
    height: 274px;

    padding: 19px 24px;

    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 10px;
  }

  .wrapper_input {
    display: flex;
    gap: 40px;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  gap: 40px;

  > button:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

`