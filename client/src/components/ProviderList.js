import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProviders } from "../actions";

class ProviderList extends Component {
  componentDidMount() {
    this.props.fetchProviders();
  }

  renderProviders() {
    const reversedProviders = [...this.props.providers].reverse();
    return reversedProviders.map(provider => {
      return (
        <div className="card darken-1" key={provider._id}>
          <div className="card-content">
            <img src={provider.avatar} />
            <br />
            <span className="card-title">{provider.handle}</span>
            <p>{provider.status}</p>
            <p className="right" />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderProviders()}</div>;
  }
}

function mapStateToProps({ providers }) {
  return { providers };
}

export default connect(mapStateToProps, { fetchProviders })(ProviderList);
