import React from "react";
import SideBar from "./SideBar";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
	return {
		friends: state.sideBar.friends
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
	}
}


export default connect(mapStateToProps, mapDispatchToProps) (SideBar);
