import { Component } from "react";
import React from "react";
import IdleTimer from "react-idle-timer";
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
import { logoutUser } from "../actions";
import { Message } from "semantic-ui-react";
import Modal from "./Modal";

class IdleWrapper extends Component {
  constructor(props) {
    super(props);
    this.idleTimer = null;
  }

  componentDidMount() {
    let remainingInterval = setInterval(() => {
      this.props.setRemaining(this.idleTimer.getRemainingTime());
    }, 1000);

    this.props.setRemainingInterval(remainingInterval);
  }

  componentWillUnmount() {
    this.props.destroyRemainingInterval();
  }

  componentDidUpdate() {
    const { isIdle } = this.props.idleTimer;

    if (isIdle) {
      this.props.logoutUser();
      this.props.resetIdleTimer();
      this.props.pauseIdleTimer();
      this.props.onActive();
    }
  }

  render() {
    const { onActive, onIdle, idleTimer } = this.props;
    return (
      <React.Fragment>
        {idleTimer.remaining < 100000 ? (
          <Modal modalHeader="Are you still there?" startOpen="true">
            <Message
              info
              icon="bullhorn"
              content="You've been inactive for some time. You will be automatically logged
              out in 1 minute."
            />
          </Modal>
        ) : null}

        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          onActive={onActive}
          onIdle={onIdle}
          timeout={idleTimer.timeout}
          startOnLoad
        />
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
  destroyRemainingInterval
})(IdleWrapper);
