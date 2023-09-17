const ToastMessage = ({ show, type, message, handleClose }) => {
  setTimeout(() => {
    handleClose();
  }, 5000);

  return show ? (
    <div className="toast toast-top toast-end">
      <div className="alert alert-warning">
        <span>{message}.</span>
        {/* <span>{type}</span> */}
        {/* <button
          className="btn btn-clear float-right"
          onClick={handleClose}
        ></button> */}
      </div>
    </div>
  ) : null;
};

export default ToastMessage;
