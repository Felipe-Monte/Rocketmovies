import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type='text' placeholder='Nome' icon={FiUser} />
        <Input type='email' placeholder='E-mail' icon={FiMail} />
        <Input type='password' placeholder='Senha' icon={FiLock} />

        <Button title='Cadastrar' />

        <Link to='/'>
          Voltar para login
        </Link>
      </Form>

      <Background />
    </Container>
  )
}