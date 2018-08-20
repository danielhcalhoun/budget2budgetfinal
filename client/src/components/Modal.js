import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class ModalContainer extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon
      >
        <Modal.Header>{this.props.modalHeader}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>{this.props.children}</Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalContainer;
