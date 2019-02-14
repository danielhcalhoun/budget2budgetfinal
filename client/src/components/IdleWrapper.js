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
import { Message } from "semantic-ui-react";
import Modal from "./Modal";

class IdleWrapper extends Component {
  state = {
    localStorage: null,
    session_timeout: 1000 * 60 * 2,
    remainingTime: 1000 * 60,
    remainingInterval: null
  };

  constructor(props) {
    super(props);

    this.watchActiveSession = this.watchActiveSession.bind(this);
    this.checkActiveSession = this.checkActiveSession.bind(this);
  }

  isSessionExpired() {
    const lastActiveTime = Number(this.state.localStorage.lastActiveTime) || 0;
    if (!lastActiveTime) return false;
    const now = Date.now();

    if (now >= lastActiveTime + this.state.session_timeout - 1000 * 60) {
      this.setState({
        remainingTime: 0
      });
    }

    return now >= lastActiveTime + this.state.session_timeout;
  }

  checkActiveSession() {
    if (this.isSessionExpired()) this.endSession();
    else
      this.setState({
        localStorage: {
          ...this.state.localStorage,
          lastActiveTime: Date.now()
        }
      });
  }

  endSession() {
    this.setState({
      localStorage: {
        ...this.state.localStorage,
        lastActiveTime: null
      }
    });
    this.props.logoutUser();
    this.props.closeModal();
    // code to end the active session
  }

  watchActiveSession() {
    const that = this;

    setTimeout(() => {
      that.checkActiveSession();
      window.requestAnimationFrame(that.watchActiveSession);
    }, 1000);
  }

  componentDidMount() {
    this.setState({
      localStorage: window.localStorage
    });
    this.props.setRemainingInterval(this.watchActiveSession());
  }

  componentWillUnmount() {
    this.setState({
      localStorage: null,
      remainingTime: 99999
    });
    this.props.destroyRemainingInterval();
  }

  render() {
    return (
      <React.Fragment>
        {this.state.remainingTime < 1000 * 60 ? (
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
