import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  > input {
    width: 100%;
    height: 60px;
    padding: 19px 24px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 10px;
  }

  > svg {
    margin-left: 16px;
  }
`