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
            <span className="card-title">{provider.title}</span>
            <p>{provider.body}</p>
            <p className="right">
              Sent On: {new Date(provider.dateSent).toLocaleDateString()}
            </p>
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
