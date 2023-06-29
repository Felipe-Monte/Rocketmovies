import { AiFillStar } from 'react-icons/ai'
import { Container } from './styles'

import { Tag } from '../Tag'

export function SummaryMovie({ data, ...rest }) {
  const paragraphs = data.text.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <Container {...rest}>
      <div className='container-star'>
        <h1>{data.title}</h1>

        <div className='stars'>
          <AiFillStar size={25} />
          <AiFillStar size={25} />
          <AiFillStar size={25} />
          <AiFillStar size={25} />
          <AiFillStar size={25} />
        </div>

      </div>

      {data.tags && (
        <header>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </header>
      )}
      {paragraphs}
    </Container>
  );
}