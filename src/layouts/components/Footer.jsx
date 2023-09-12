const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly p-10">
        <div className="mb-6 md:mb-0">
          <span className="footer-title">Services</span>
          <ul className="list-none pl-0">
            <li className="mb-2">
              <a className="link link-hover">Branding</a>
            </li>
            <li className="mb-2">
              <a className="link link-hover">Design</a>
            </li>
            <li className="mb-2">
              <a className="link link-hover">Marketing</a>
            </li>
            <li className="mb-2">
              <a className="link link-hover">Advertisement</a>
            </li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <span className="footer-title">Company</span>
          <ul className="list-none pl-0">
            <li className="mb-2">
              <a className="link link-hover">About us</a>
            </li>
            <li className="mb-2">
              <a className="link link-hover">Contact</a>
            </li>
            <li className="mb-2">
              <a className="link link-hover">Jobs</a>
            </li>
            <li className="mb-2">
              <a className="link link-hover">Press kit</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <ul className="list-none pl-0">
            <li className="mb-2">
              <a className="link link-hover">Terms of use</a>
            </li>
            <li className="mb-2">
              <a className="link link-hover">Privacy policy</a>
            </li>
            <li className="mb-2">
              <a className="link link-hover">Cookie policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
