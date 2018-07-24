import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class ModalContainer extends Component {
  render() {
    return (
      <Modal trigger={<Button>Show Modal</Button>} closeIcon>
        <Modal.Header>{this.props.modalHeader}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>{this.props.children}</Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalContainer;
