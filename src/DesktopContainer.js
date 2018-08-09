import PropTypes from 'prop-types'
import HomepageHeading from './HomepageHeading'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Card,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (

      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div className='page-body'>
          <Segment

            textAlign='center'
            style={{ height: '50vw', padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              icon='labeled'
            >
              <Container>
                <Menu.Item name='home' as='a' active>
                  <Icon name='meh' />
                  John Fewell
                </Menu.Item>
                <Menu.Item as='a' href='https://github.com/johnfewell/'>
                  <Icon name='github' />
                  Github
                </Menu.Item>
                <Menu.Item
                  name='linkedin'
                  as='a' href='https://linkedin.com/in/johnfewell/'>
                  <Icon name='linkedin' />
                  Linkedin
                </Menu.Item>
                <Menu.Item
                  name='list alternate outline'
                  as='a' href='https://y9u.org/'>
                  <Icon name='list alternate outline' />
                  Blog
                </Menu.Item>
                <Menu.Item as='a' href='mailto:fewell@gmail.com'>
                  <Icon name='mail' />
                  Contact
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
          </div>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer
