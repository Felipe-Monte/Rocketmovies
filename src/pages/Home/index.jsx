import { Container, Content, Section, ContainerButton } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Section>
            <div>
              <h1>Meus livros</h1>
              <ContainerButton to='/createMovie'>
                <Button title='Adicionar filme' />
              </ContainerButton>
            </div>

            <Card data={{
              title: "Interestelar",
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro'
              ,
              tags: [
                { id: '1', name: 'Ficção cientifica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }} />

            <Card data={{
              title: "Interestelar",
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro'
              ,
              tags: [
                { id: '1', name: 'Ficção cientifica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }} />

            <Card data={{
              title: "Interestelar",
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro'
              ,
              tags: [
                { id: '1', name: 'Ficção cientifica' },
                { id: '2', name: 'Drama' },
                { id: '3', name: 'Família' }
              ]
            }} />

          </Section>
        </Content>
      </main>
    </Container>
  )
}