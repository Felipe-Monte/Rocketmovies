import { AiFillStar } from 'react-icons/ai'
import { Container } from './styles'

import { Tag } from '../Tag'

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <div className='container-star'>
        <AiFillStar size={25}/>
        <AiFillStar size={25}/>
        <AiFillStar size={25}/>
        <AiFillStar size={25}/>
        <AiFillStar size={25}/>
      </div>

      <p>{data.text}</p>
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}