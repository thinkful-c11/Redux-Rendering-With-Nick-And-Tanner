import React from "react";
import { connect } from "react-redux";
import { toggleInstructions } from "../actions/index";
import TopNav from "./top-nav";
import InfoModal from "./info-modal";

import "./header.css";

export function Header(props) {
  let infoModal;
  if (props.showInfoModal) {
    infoModal = <InfoModal />;
  }

  return (
    <header>
      <TopNav />
      {infoModal}
      <h1>HOT or COLD</h1>
    </header>
  );
}

export const mapStateToProps = (state, props) => ({
  showInfoModal: state.instructions
});

export default connect(mapStateToProps)(Header);
