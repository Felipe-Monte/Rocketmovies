import styled from 'styled-components'

export const Container = styled.button`
  margin-bottom: 16px;
  width: 100%;
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 10px;

  div > h1 {
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-bottom: 20px;
  }

  .container-star {
    display: flex;
  }

  .stars {
    padding: 5px;
  }

  > p {
    margin-top: 20px;
    font-size: 16px;
    font-family: 'Roboto Slab';
    text-align: left;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
  }

  > header {
    width: 100%;
    display: flex;
    gap: 10px;
    margin-top: 24px;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  svg:nth-child(5) {
    color: black;
  }
`