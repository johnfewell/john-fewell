import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import "./semantic/dist/semantic.min.css";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import DimmerHoc from "./DimmerHoc";
import AboutMe from "./AboutMe";
import GetInTouch from "./GetInTouch";
import Projects from "./Projects";
import SiteInReact from "./SiteInReact";
import React from "react";
import {
  
  Responsive
} from "semantic-ui-react";

const ResponsiveContainer = ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>John Fewell | Full stack web dev</title>
      <meta
        name="description"
        content="This is my portfolio site and has links to my blog, my github and my recent projects."
      />
      <link rel="canonical" href="http://johnfewell.com" />
    </Helmet>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <DimmerHoc>
      <AboutMe />
    </DimmerHoc>
    <DimmerHoc>
      <Projects />
    </DimmerHoc>
    <DimmerHoc>
      <SiteInReact />
    </DimmerHoc>
    <DimmerHoc>
      <GetInTouch />
    </DimmerHoc>
  </ResponsiveContainer>
);

export default HomepageLayout;

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
