const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly p-10">
        <div className="mb-6 md:mb-0">
          <span className="footer-title text-3xl">DIE UNAP</span>
          <div className="h-full">
            <p>Innova ahora</p>
            <div className="flex justify-start items-center gap-4 py-8 ">
              <button className="btn btn-info btn-sm">
                <img
                  src="https://api.iconify.design/akar-icons:twitter-fill.svg"
                  alt="twitter"
                />
              </button>
              <button className="btn btn-info btn-sm">
                <img
                  src="https://api.iconify.design/akar-icons:facebook-fill.svg"
                  alt="facebook"
                />
              </button>
              <button className="btn btn-info btn-sm">
                <img
                  src="https://api.iconify.design/akar-icons:instagram-fill.svg"
                  alt="instagram"
                />
              </button>
            </div>
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
