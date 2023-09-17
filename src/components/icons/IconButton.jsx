export function IconButton({ onClick, icon }) {
  return (
    <button onClick={onClick} className="btn btn-xs">
      <img src={icon} alt="" className="w-4" />
    </button>
  );
}
