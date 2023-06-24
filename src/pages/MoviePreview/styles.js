import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > section {
    padding: 40px 123px;

    > a {
      display: block;

      margin-bottom: 24px;

      color: ${({ theme }) => theme.COLORS.ROSE};
    }

    > h2 {
      margin-bottom: 40px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      font-size: 36px;
      font-family: 'Roboto Slab';
      font-weight: 500;
    }

    > p {
      margin-bottom: 20px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      line-height: 22px;
      text-align: justify;
      font-size: 16px;
      font-family: 'Roboto Slab';
    }
  }
`