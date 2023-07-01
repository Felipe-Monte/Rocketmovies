import { Container, Logo, Search, Profile } from './styles'

import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
      <Logo>
        RocketMovies
      </Logo>

      <Search>
        <Input
          type='text'
          placeholder='pesquisar por título'
        />
      </Search>

      <Profile to='/profile'>
        <div>
          <span>Carlos Felipe</span>
          <strong>Sair</strong>
        </div>

        <img src="https://github.com/Felipe-Monte.png" alt="foto do usuário" />
      </Profile>
    </Container>
  )
}