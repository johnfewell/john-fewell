import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import ContactForm from './ContactForm'
import './semantic/dist/semantic.min.css';
import HomepageHeading from './HomepageHeading';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          About me
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          It all started when I built my first band websites in High School and college. Post college, my band started becoming successful and I became a professional musician for the next five years. After that, I was an independent SEO consultant for local businesses. For the last eight years, I've brought my tech skills to bear as director of operations for a non-profit training institute.
  I decided to finally pursue formal training in web development which led me to the Flatiron School.

  Proficient in Javascript, React, Redux, jQuery, HTML, CSS, SASS, SQL, Git, Adobe Photoshop, Excel, and Google Docs.
        </p>
      </Container>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        Projects
        </Divider>
          <Card.Group centered>
            <Card style={{ height: '410px', background: '#FEBBB2'  }} className="ui raised link card" >
              <Image
                fluid
                label={{ as: 'a', color: '#01444D', content: 'Fancy React Forms', icon: 'react', size: 'huge', ribbon: true }}
                src='' />
              <Card.Content as='a' href={'https://github.com/johnfewell/fancy-react-forms/tree/correct-track'} data-content="Add users to your feed">
                <Header as='h2' style={{ marginTop: '80px', color: '#01444D' }}>
                  This app allows for the creation of forms and the ability to respond to those and view the responses in a Typeform-like way.
                </Header>
              </Card.Content>
              <Card.Content extra>
                <Icon name='react' size='large' />
                <Icon name='js' size='large' />
                <Icon name='html5' size='large' />
                React, Redux, JS
              </Card.Content>
            </Card>
            <Card style={{ height: '410', background: '#FEC021'  }}className="ui raised link card">
              <Image
                fluid
                label={{ as: 'a', color: '#013FDE', content: 'CE Evaluations', icon: 'react', size: 'huge', ribbon: true }}
                src='' />
              <Card.Content as='a'  href={'https://github.com/johnfewell/ce-evals-app'}>
                <Header as='h2' style={{ marginTop: '80px', color: '#013FDE' }}>
                  This app allows for the creation and management of continuing education evaluations and certificates.
                </Header>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name='js' size='large' />
                  Rails, Ruby, JS
                </a>
              </Card.Content>
            </Card>

            <Card style={{ height: '410px', background: '#B2CDDE'  }}className="ui raised link card">
              <Image
                fluid
                label={{ as: 'a', color: '#4D3221', content: 'School Registration', icon: 'js', size: 'huge', ribbon: true }}
                src='' />
              <Card.Content as='a' href={'https://github.com/johnfewell/sinatra-portfolio-school-registration'}
                >
                <Header as='h2' style={{ marginTop: '80px', color: '#4D3221' }}>
                  This app allows the tracking of classes, students, and instructors.
                </Header>
              </Card.Content>
              <Card.Content extra>
                <a>
                  Sinatra, Ruby
                </a>
              </Card.Content>
            </Card>
          </Card.Group>
    </Segment>

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

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container textAlign='center' >
        <Header as='h2'>Get in touch.</Header>
        <Header as='h3'>
          <a href='mailto:fewell@gmail.com'>fewell@gmail.com</a>
        </Header>
      </Container>
  </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout


// The old footer
//
// <Segment inverted vertical style={{ padding: '5em 0em' }}>
//   <Container>
//     <Grid divided inverted stackable>
//       <Grid.Row>
//         <Grid.Column width={3}>
//           <Header inverted as='h4' content='About' />
//           <List link inverted>
//             <List.Item as='a'>Sitemap</List.Item>
//             <List.Item as='a'>Contact Us</List.Item>
//             <List.Item as='a'>Religious Ceremonies</List.Item>
//             <List.Item as='a'>Gazebo Plans</List.Item>
//           </List>
//         </Grid.Column>
//         <Grid.Column width={3}>
//           <Header inverted as='h4' content='Services' />
//           <List link inverted>
//             <List.Item as='a'>Banana Pre-Order</List.Item>
//             <List.Item as='a'>DNA FAQ</List.Item>
//             <List.Item as='a'>How To Access</List.Item>
//             <List.Item as='a'>Favorite X-Men</List.Item>
//           </List>
//         </Grid.Column>
//         <Grid.Column width={7}>
//           <Header as='h4' inverted>
//             Footer Header
//           </Header>
//           <p>
//             Extra space for a call to action inside the footer that could help re-engage users.
//           </p>
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </Container>
// </Segment>
