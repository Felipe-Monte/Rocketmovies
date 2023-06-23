import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 116px;

  padding: 30px 123px;
  border: 1px solid blue;
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS.ROSE};
  font-size: 24px;
  font-family: Roboto Slab;
  font-weight: 700;
`

export const Search = styled.div`
  width: 60%;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 10px;
    text-align: right;
    span {
      display: block;
    }  
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`