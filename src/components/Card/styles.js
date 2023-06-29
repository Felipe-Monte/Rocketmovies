import styled from 'styled-components'

export const Container = styled.button`
  margin-bottom: 16px;
  width: 100%;
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: none;
  border-radius: 10px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 20px;
  }

  > div.container-star {
    text-align: left;
    margin-bottom: 20px;

    > svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }
  
  

  > p {
    font-size: 16px;
    font-family: 'Roboto Slab';
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    gap: 10px;
    margin-top: 24px;
  }
`