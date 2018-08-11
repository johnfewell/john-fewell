import React from 'react'
import ReduxIcon from './ReduxIcon'
import RubyIcon from './RubyIcon'
import RailsIcon from './RailsIcon'
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

const Projects = () => (
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
          <Card.Content as='a' href={'https://github.com/johnfewell/fancy-react-forms/'} data-content="Add users to your feed">
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
        <Card style={{ height: '410', background: '#FEC021'  }} className="ui raised link card">
          <div className="ui fluid image">
            <a className="ui #013FDE huge ribbon label">
              <ReduxIcon />
              <RubyIcon />
              <RailsIcon />
            CE Evaluations
            </a>
          </div>

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
)

export default Projects
