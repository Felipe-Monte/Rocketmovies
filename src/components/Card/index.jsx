import { Container } from './styles'

export function Card({title, text}) {
  return(
    <Container>
      <header>
        <h3>{title}</h3>
      </header>
      
      <div>
        <p>{text}</p>
      </div>
    </Container>
  )
}