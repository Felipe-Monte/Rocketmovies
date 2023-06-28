import { Container, UserImg, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">Voltar</a>
      </header>

      <UserImg>
        <img src="https://github.com/Felipe-Monte.png" alt="Foto do usuário" />

        <label htmlFor="avatar">
          <input id='avatar' type="file" />
        </label>
      </UserImg>

      <Form>
        <Input type='text' placeholder='Usuário' />
        <Input type='email' placeholder='E-mail' />
        <Input type='password' placeholder='Senha atual' />
        <Input type='password' placeholder='Nova senha' />

        <Button title='Salvar' />
      </Form>
    </Container>
  )
}