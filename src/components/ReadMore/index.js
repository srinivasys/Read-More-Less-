import {useState} from 'react'

import {
  Container,
  ContentContainer,
  Heading,
  Paragraph,
  Image,
  Text,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setIsReadMore] = useState(false)

  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const buttonText = isReadMore ? 'Read Less' : 'Read More'

  const onClickButton = () => setIsReadMore(prevStatus => !prevStatus)

  return (
    <Container>
      <ContentContainer>
        <Heading>React Hooks</Heading>
        <Paragraph>Hooks are a new addition to react</Paragraph>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Text>{description}</Text>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ContentContainer>
    </Container>
  )
}

export default ReadMore
