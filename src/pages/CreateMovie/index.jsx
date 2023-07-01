import { Container, Content, InputArea, ButtonArea } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Link to='/'>
            Voltar
          </Link>

          <h1>Novo filme</h1>

          <InputArea>
            <div className='wrapper_input'>
              <Input type='text' placeholder='Título' />
              <Input type='text' placeholder='Sua nota (de 0 a 5)' />
            </div>


            <textarea placeholder='Observações'></textarea>
          </InputArea>



          <ButtonArea>
            <Button title='Excluir filme' />

            <Button title='Salvar alterações' />
          </ButtonArea>
        </Content>
      </main>
    </Container>
  )
}