import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

const AboutMe = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Container text>
      <Header as="h3" style={{ fontSize: "2em" }}>
        About me
      </Header>
      <p style={{ fontSize: "1.33em" }}>
        I’m a full stack web developer based in New York City and graduated from
        the Flatiron School in fall of 2018. Previously, I was the Director of
        Operations at the Institute for Psychoanalytic Training and Research, a
        nonprofit training institute and clinical center in Manhattan, for more
        than 8 years where I oversaw all operations and finance. I have also run
        my own SEO firm in Brooklyn, improving optimization for clients such as
        Massage Williamsburg. I hold a BA from Sarah Lawrence College and was a
        professional musician for five years after college, touring domestically
        with my band in 2005-6. I’ve been building websites since high school
        and was the website manager and SEO consultant for the musician Beck.
        <br />
        Proficient in Javascript ES6, React, Redux, jQuery, HTML, CSS, UX design, SQL, Postgres, 
        Git, Adobe Photoshop, and Excel(VBA).
      </p>
    </Container>
  </Segment>
);

export default AboutMe;
