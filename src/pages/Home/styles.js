import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.div`
  width: 100%;
  margin: 15px auto;
  padding: 50px 124px;
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  > div {
    display: flex;
    justify-content: space-between;

    h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    font-family: 'Roboto Slab';
    }

    button {
    width: 210px;
    }
  }

  
`