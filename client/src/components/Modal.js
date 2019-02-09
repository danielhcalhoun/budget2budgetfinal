import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

class ModalContainer extends Component {
  state = { modalOpen: false };

  componentDidMount() {
    const { startOpen } = this.props;

    if (startOpen) {
      this.handleOpen();
    }
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { modalTrigger } = this.props;

    return (
      <Modal
        trigger={
          modalTrigger ? (
            <Button onClick={this.handleOpen}>{modalTrigger}</Button>
          ) : null
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon
        style={{ height: "auto" }}
      >
        <Modal.Header style={{ textAlign: "center" }}>
          {this.props.modalHeader}
        </Modal.Header>
        <Modal.Content image>
          <Modal.Description>{this.props.children}</Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalContainer;
