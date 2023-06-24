import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  width: 100%;
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;

  header > h3 {
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 24px;
    font-family: 'Roboto Slab';
    font-weight: 700;
  }

  div > p {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-family: 'Roboto Slab';  
  }
`