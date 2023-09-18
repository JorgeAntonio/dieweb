import PropTypes from "prop-types";

const ToastMessage = ({ show, type, message, handleClose }) => {
  setTimeout(() => {
    handleClose();
  }, 5000);

  if (type === "Error") {
    return show ? (
      <div className="toast toast-top toast-end">
        <div className="alert alert-error">
          <p className="text-lg font-bold">{type}</p>
          <span>{message}.</span>
        </div>
      </div>
    ) : null;
  }

  return show ? (
    <div className="toast toast-top toast-end">
      <div className="alert alert-success">
        <p className="text-lg font-bold">{type}</p>
        <span>{message}.</span>
      </div>
    </div>
  ) : null;
};

ToastMessage.propTypes = {
  show: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ToastMessage;
