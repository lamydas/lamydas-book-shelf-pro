import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
 // if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;

  return loading? <Spinner /> :<Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);