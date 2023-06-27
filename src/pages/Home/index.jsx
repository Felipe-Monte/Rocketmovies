import { Container, Content, Section } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Tag } from '../../components/Tag'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Section>
            <div>
              <h1>Meus livros</h1>
              <Button title='Adicionar filme' />
            </div>

            <Card
              title='Interestelar'
              text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, eius nobis optio eligendi quo debitis? Dolore repellendus, perferendis dignissimos nemo expedita officiis alias saepe ipsum similique consequatur id sit cumque!'
            />

            <Card
              title='Interestelar'
              text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, eius nobis optio eligendi quo debitis? Dolore repellendus, perferendis dignissimos nemo expedita officiis alias saepe ipsum similique consequatur id sit cumque!'
            />

            <Card
              title='Interestelar'
              text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, eius nobis optio eligendi quo debitis? Dolore repellendus, perferendis dignissimos nemo expedita officiis alias saepe ipsum similique consequatur id sit cumque!'
            />

          </Section>
        </Content>
      </main>
    </Container>
  )
}