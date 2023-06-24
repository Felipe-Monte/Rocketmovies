import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  padding: 16px 32px;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 10px;
  border: none;
`