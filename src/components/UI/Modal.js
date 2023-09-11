import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from 'react-dom'

// i'll add backdrop and overlay component func here that takes data as a props

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.context}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <Fragment>
      {/* if we are not using portal */}

      {/* <Backdrop /> */}
      {/* <ModalOverlay>{props.children}</ModalOverlay> */}

      {/* we technically don't have to use a portal but to insure that our html code is not all over the place in the final application  i will use portals here using createportal method for that we have to use reactdom object*/}
      {/* createportal takes 2 arg first what to portal and 2nd where to portal  */}
      {ReactDOM.createPortal(<Backdrop />,portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </Fragment>
  );
};

export default Modal;
