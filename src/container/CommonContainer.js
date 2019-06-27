/* eslint react/prop-types: 0 */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";

export default function CommonContainer(ComposedComponent) {
    class CommonContainer extends React.Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }
    function mapStateToProps(state) {
        return {
            stockReducer: state.stockReducer
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(ActionCreators, dispatch)
        };
    }
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(CommonContainer);
}