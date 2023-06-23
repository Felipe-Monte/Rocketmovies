import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60px;

  > input {
    width: 100%;
    height: 60px;
    padding: 19px 24px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 10px;
  }
`