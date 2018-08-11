import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Label
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      inverted
      style={{
        fontSize: mobile ? '3em' : '5.9vw',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '12vh',
      }}
    >I'm John.</Header>
    <Header
      as='h1'
      inverted
      style={{
        fontSize: mobile ? '2em' : '2.5vw',
        fontWeight: 'normal',
        marginBottom: 0,
      }}
    >I build beautiful and responsive <span className='replace-text'>web applications.</span>
    </Header>
    <div className="ui bounce large monitor">
      <Label pointing='below'>Scroll</Label>
    </div>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading
