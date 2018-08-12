import React from "react";
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
} from "semantic-ui-react";

const GetInTouch = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Container textAlign="center">
      <Header as="h2">Get in touch.</Header>
      <Header as="h3">
        <a href="mailto:fewell@gmail.com">fewell@gmail.com</a>
      </Header>
    </Container>
  </Segment>
);

export default GetInTouch;
