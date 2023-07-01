import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 116px;

  padding: 30px 123px;

  border-bottom: 1px solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS.ROSE};
  font-size: 24px;
  font-family: 'Roboto Slab';
  font-weight: 700;
`

export const Search = styled.div`
  width: 60%;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};

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