import React, { Component, Fragment } from "react";
import { Dimmer, Segment } from "semantic-ui-react";
import Observer from "react-intersection-observer";

class DimmerHoc extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });
  handleChange(inView) {
    inView ? this.handleHide() : this.handleShow();
  }
  render() {
    const { active } = this.state;
    return (
      <Observer
        onChange={inView => {
          this.handleChange(inView);
        }}
        threshold=".5"
      >
        <Dimmer.Dimmable
          as={Segment}
          blurring
          dimmed={active}
          className="borderless form-group-padding"
        >
          <Dimmer active={active} inverted onClickOutside={this.handleHide} />
          {this.props.children}
        </Dimmer.Dimmable>
      </Observer>
    );
  }
}
export default DimmerHoc;
