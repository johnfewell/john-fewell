import PropTypes from "prop-types";
import React, { Component } from "react";
import HomepageHeading from "./HomepageHeading";
import { Menu, Responsive, Segment, Sidebar } from "semantic-ui-react";

class MobileContainer extends Component {

  render() {
    const { children } = this.props;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
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
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

export default MobileContainer;
