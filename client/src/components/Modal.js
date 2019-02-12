import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import { closeModal, openModal } from "../actions";

class ModalContainer extends Component {
  state = { modalOpen: this.props.modalOpen };

  componentDidMount() {
    const { startOpen, modalOpen } = this.props;
    if (startOpen) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
    this.props.openModal();
  };

  handleClose = () => {
    this.setState({ modalOpen: false });
    this.props.closeModal();
  };

  render() {
    const { modalTrigger, modalHeader, children } = this.props;

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
          {modalHeader}
        </Modal.Header>
        <Modal.Content image>
          <Modal.Description>{children}</Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

function mapStateToProps({ modal }) {
  return { modalOpen: modal.modalOpen };
}

export default connect(mapStateToProps, {
  openModal,
  closeModal
})(ModalContainer);
