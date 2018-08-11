import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Label,
  Segment,
  Divider,
  Card,
  Image
} from 'semantic-ui-react'

const SiteInReact = () => (
<Segment style={{ padding: '8em 0em' }} vertical>
  <Container text>
    <Header as='h3' style={{ fontSize: '2em' }}>
      This site is built in React
    </Header>
    <p style={{ fontSize: '1.33em' }}>
      This site is built in React using Semantic UI. I thought it would be a fun challenge and learning experience and it has been.
    </p>
    <Button icon labelPosition='left' as='a' href='https://github.com/johnfewell/john-fewell' size='large'>
      <Icon name='github' />
      View on Github
    </Button>
  </Container>
</Segment>
)

export default SiteInReact