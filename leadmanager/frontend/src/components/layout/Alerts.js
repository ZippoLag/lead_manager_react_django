import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    errorReducer: PropTypes.object.isRequired,
    messageReducer: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { errorReducer, alert, messageReducer } = this.props;
    if (errorReducer !== prevProps.errorReducer) {
      if (errorReducer.msg.name)
        alert.error(`Name: ${errorReducer.msg.name.join()}`);
      if (errorReducer.msg.email)
        alert.error(`Email: ${errorReducer.msg.email.join()}`);
      if (errorReducer.msg.message)
        alert.error(`Message: ${errorReducer.msg.message.join()}`);
      if (errorReducer.msg.non_field_errors)
        alert.error(errorReducer.msg.non_field_errors.join());
      if (errorReducer.msg.username)
        alert.error(errorReducer.msg.username.join());
    }

    if (messageReducer !== prevProps.messageReducer) {
      if (messageReducer.deleteLead) alert.success(messageReducer.deleteLead);
      if (messageReducer.addLead) alert.success(messageReducer.addLead);
      if (messageReducer.passwordNotMatch)
        alert.error(messageReducer.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  errorReducer: state.errorReducer,
  messageReducer: state.messageReducer
});

export default connect(mapStateToProps)(withAlert(Alerts));
