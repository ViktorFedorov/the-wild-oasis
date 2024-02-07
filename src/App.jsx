import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles.js'
import Button from './ui/Button.jsx'
import Input from './ui/Input.jsx'
import Heading from './ui/Heading.jsx'
import Row from './ui/Row.jsx'

const StyledApp = styled.div`
  background-color: var(--color-blue-700);
  padding: 20px;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading as='h1'>The wild oasis</Heading>
      <StyledApp>
        <Row>
          <Heading as='h2'>checkin & checkout</Heading>
          <Button>Check in</Button>
          <Button>Check out</Button>
        </Row>
        <Heading as='h3'>Form</Heading>
        <Input type='text' placeholder='guest cnt' />
        <Input type='text' placeholder='guest cnt' />
      </StyledApp>
    </>
  )
}

export default App
