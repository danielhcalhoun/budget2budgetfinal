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
  setLastActiveTime,
  setRemaining,
  setRemainingInterval
} from "../actions/idleActions";
import { closeModal, logoutUser } from "../actions";
import { Message } from "semantic-ui-react";
import Modal from "./Modal";

class IdleWrapper extends Component {
  constructor(props) {
    super(props);
    this.watchActiveSession = this.watchActiveSession.bind(this);
    this.checkActiveSession = this.checkActiveSession.bind(this);
  }

  isSessionExpired() {
    const { timeout, localStorage } = this.props;

    const lastActiveTime = Number(localStorage.lastActive) || 0;
    if (!lastActiveTime) return false;
    const now = Date.now();

    if (now >= lastActiveTime + timeout - 1000 * 60) {
      this.props.setRemaining(0);
    }

    return now >= lastActiveTime + timeout;
  }

  checkActiveSession() {
    if (this.isSessionExpired()) this.endSession();
    else this.props.setLastActiveTime(Date.now());
  }

  endSession() {
    this.props.logoutUser();
    this.props.closeModal();
    this.props.resetIdleTimer();
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
        {this.props.remaining < 1000 * 60 ? (
          <Modal modalHeader="Are you still there?" startOpen="true">
            <Message
              info
              icon="bullhorn"
              content="You've been inactive for some time. You will be automatically logged
              out in 1 minute."
            />
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth, idleTimer }) {
  return {
    auth,
    idleTimer,
    timeout: idleTimer.timeout,
    remaining: idleTimer.remaining,
    isIdle: idleTimer.isIdle,
    lastActive: idleTimer.lastActive,
    elapsed: idleTimer.elapsed,
    remainingInterval: idleTimer.remainingInterval,
    localStorage: idleTimer.localStorage
  };
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
  setLastActiveTime,
  closeModal
})(IdleWrapper);
