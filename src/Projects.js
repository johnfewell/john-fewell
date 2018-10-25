import React from "react";
import ReduxIcon from "./ReduxIcon";
import RubyIcon from "./RubyIcon";
import RailsIcon from "./RailsIcon";
import { Header, Icon, Segment, Divider, Popup, Card } from "semantic-ui-react";

const Projects = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Divider
      as="h2"
      className="header"
      horizontal
      style={{ margin: "3em 0em", textTransform: "uppercase" }}
    >
      Projects
    </Divider>
    <Card.Group centered>
      <Card
        style={{ height: "410px", background: "#FEBBB2" }}
        className="ui raised link card"
      >
        <a href="https://github.com/johnfewell/fancy-react-forms/">
          <div className="ui fluid image">
            <div className="ui huge ribbon label">
              <Icon name="code" />
              Fancy React Forms
            </div>
          </div>
        </a>
        <Card.Content
          as="a"
          href={"https://github.com/johnfewell/fancy-react-forms/"}
        >
          <Header as="h2" style={{ marginTop: "80px", color: "#01444D" }}>
            This app allows for the creation of forms and the ability to respond
            to those and view the responses in a Typeform-like way.
          </Header>
        </Card.Content>
        <Card.Content extra>
          <ReduxIcon />
          <Icon name="react" size="large" />
          <Icon name="js" size="large" />
          React, Redux, JavaScript
        </Card.Content>
      </Card>

      <Card
        style={{ height: "410", background: "#FEC021" }}
        className="ui raised link card"
      >
        <a href="https://github.com/johnfewell/ce-evaluations">
          <div className="ui fluid image">
            <div className="ui huge ribbon label">
              <Icon name="code" />
              CE Evaluations
            </div>
          </div>
        </a>
        <Card.Content
          as="a"
          href={"https://github.com/johnfewell/ce-evaluations"}
        >
          <Header as="h2" style={{ marginTop: "80px", color: "#013FDE" }}>
            This app allows for the creation and management of continuing
            education evaluations and certificates.
          </Header>
        </Card.Content>
        <Card.Content extra>
          <RailsIcon />
          <RubyIcon />
          <Icon name="js" size="large" />
          Rails, Ruby, JavaScript
        </Card.Content>
      </Card>
      <Card
        style={{ height: "410px", background: "#B2CDDE" }}
        className="ui raised link card"
      >
        <a href="https://github.com/johnfewell/sinatra-portfolio-school-registration">
          <div className="ui fluid image">
            <div className="ui huge ribbon label">
              <Icon name="code" />
              School Registration
            </div>
          </div>
        </a>
        <Card.Content
          as="a"
          href={
            "https://github.com/johnfewell/sinatra-portfolio-school-registration"
          }
        >
          <Header as="h2" style={{ marginTop: "80px", color: "#4D3221" }}>
            This app allows the tracking of classes, students, and instructors.
          </Header>
        </Card.Content>
        <Card.Content extra>
          <RubyIcon />
          Sinatra, Ruby
        </Card.Content>
      </Card>
    </Card.Group>
  </Segment>
);

export default Projects;
