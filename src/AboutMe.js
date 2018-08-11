import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Label,
  Segment
} from 'semantic-ui-react'

const AboutMe = () => (
<Segment style={{ padding: '8em 0em' }} vertical>
  <Container text>
    <Header as='h3' style={{ fontSize: '2em' }}>
      About me
    </Header>
    <p style={{ fontSize: '1.33em' }}>
      It all started when I built my first band websites in High School and college. Post college, my band started becoming successful and I became a professional musician for the next five years. After that, I was an independent SEO consultant for local businesses. For the last eight years, I've brought my tech skills to bear as director of operations for a non-profit training institute.
      I decided to pursue formal training in web development which led me to the Flatiron School.
      <p></p>
      Proficient in Javascript, React, Redux, jQuery, HTML, CSS, SASS, SQL, Git, Adobe Photoshop, Excel, and Google Docs.
    </p>
  </Container>
</Segment>
)

export default AboutMe
