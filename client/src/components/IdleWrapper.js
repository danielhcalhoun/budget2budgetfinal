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
      <div>
        {idleTimer.remaining < 1000 ? (
          <div>You are about to be logged out</div>
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
      </div>
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
