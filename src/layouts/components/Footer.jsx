import SocialMediaLink from "../../components/client/SocialMediaLink";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly p-10">
        <div className="mb-6 md:mb-0">
          <span className="footer-title text-3xl">DIE UNAP</span>
          <div className="h-full">
            <p>Innova ahora</p>
            <SocialMediaLink />
          </div>
        </div>
        <div className="mb-6 md:mb-0 w-[200px]"></div>
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
