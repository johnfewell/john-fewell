import PropTypes from "prop-types";
import React, { Component } from "react";
import HomepageHeading from "./HomepageHeading";
import {
  Menu,
  Responsive,
  Segment,
  Sidebar
} from "semantic-ui-react";

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Projects</Menu.Item>
            <Menu.Item as="a">Contact</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
          <div className="page-body gradient-1">
            <div className="gradient-2">
              <div className="gradient-3">
              <Segment
                textAlign="center"
                style={{ height: "100vh", padding: "1em 0em" }}
                vertical
              >
                <HomepageHeading mobile />
              </Segment>
            </div>
            </div>
            </div>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;
