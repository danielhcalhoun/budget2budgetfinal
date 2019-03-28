import { Component } from "react";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {
  changeTimeout,
  destroyRemainingInterval,
  onActive,
  onIdle,
  pauseIdleTimer,
  resetIdleTimer,
  resumeIdleTimer,
  setElapsed,
  setRemaining,
  setRemainingInterval
} from "../actions/idleActions";
import { closeModal, logoutUser } from "../actions";
import Modal from "./Modal";
import Message from "semantic-ui-react/dist/commonjs/collections/Message/Message";

class IdleWrapper extends Component {
  state = {
    session_timeout: 1000 * 60 * 15,
    remainingTime: 1000 * 60,
    remainingInterval: null
  };

  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;

    this.watchActiveSession = this.watchActiveSession.bind(this);
    this.checkActiveSession = this.checkActiveSession.bind(this);
  }

  isSessionExpired() {
    const lastActiveTime = Number(this.localStorage.lastActiveTime) || 0;
    if (!lastActiveTime) return false;
    const now = Date.now();

    return now >= lastActiveTime + this.state.session_timeout;
  }

  checkActiveSession() {
    if (this.isSessionExpired()) this.endSession();
    else this.localStorage.lastActiveTime = Date.now();
  }

  endSession() {
    this.localStorage.removeItem("lastActiveTime");
    this.props.logoutUser();
    this.props.closeModal();
  }

  watchActiveSession() {
    const that = this;

    setTimeout(() => {
      that.checkActiveSession();
      window.requestAnimationFrame(that.watchActiveSession);
    }, 1000);
  }

  componentDidMount() {
    this.props.setRemainingInterval(this.watchActiveSession());
  }

  componentWillUnmount() {
    this.props.destroyRemainingInterval();
  }

  render() {
    return (
      <React.Fragment>
        {/*{this.state.remainingTime < 1000 * 60 ? (*/}
        {/*<Modal modalHeader="Are you still there?" startOpen="true">*/}
        {/*<Message*/}
        {/*info*/}
        {/*icon="bullhorn"*/}
        {/*content="You've been inactive for some time. You will be automatically logged*/}
        {/*out in 1 minute."*/}
        {/*/>*/}
        {/*</Modal>*/}
        {/*) : null}*/}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth, idleTimer }) {
  return { auth, idleTimer };
}

export default connect(mapStateToProps, {
  onActive,
  onIdle,
  resetIdleTimer,
  changeTimeout,
  pauseIdleTimer,
  resumeIdleTimer,
  setElapsed,
  setRemaining,
  setRemainingInterval,
  logoutUser,
  destroyRemainingInterval,
  closeModal
})(IdleWrapper);
