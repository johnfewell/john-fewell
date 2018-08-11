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
        fontSize: '5.9vw',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '10vh',
      }}
    >I'm John.</Header>
    <Header
      as='h1'
      inverted
      style={{
        fontSize: mobile ? '1em' : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
      }}
    >I build beautiful and responsive <span className='replace-text'>web applications.</span>
    </Header>
    <div className="bounce">
      <Label pointing='below'>Scroll</Label>
    </div>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading


// <Header
//   as='h2'
//   content='Full Stack Dev IPSUM'
//   inverted
//   style={{
//     fontSize: mobile ? '1.5em' : '1.7em',
//     fontWeight: 'normal',
//     marginTop: mobile ? '0.5em' : '1.5em',
//   }}
// />
