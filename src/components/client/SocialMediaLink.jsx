export default function SocialMediaLink() {
  return (
    <div className="flex justify-center items-center gap-4 py-8">
      <button className="btn btn-ghost btn-sm">
        <img
          src="https://api.iconify.design/akar-icons:twitter-fill.svg"
          alt="twitter"
        />
      </button>
      <button className="btn btn-ghost btn-sm">
        <img
          src="https://api.iconify.design/akar-icons:facebook-fill.svg"
          alt="facebook"
        />
      </button>
      <button className="btn btn-ghost btn-sm">
        <img
          src="https://api.iconify.design/akar-icons:instagram-fill.svg"
          alt="instagram"
        />
      </button>
    </div>
  );
}
