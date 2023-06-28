import { Container } from './styles'

import { Tag } from '../Tag'

export function SummaryMovie({ data, ...rest }) {
  const paragraphs = data.text.split('\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
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