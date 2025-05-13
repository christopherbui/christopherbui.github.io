export default function Hero() {
  return (
    <div className="hero bg-base-100 pt-10 pb-20 mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse font-lilex">
        <img
          src="/img/avatar.png"
          alt="Hero"
          className="max-w-xs rounded-lg bg-none"
        />
        <div className="text-[rgb(86,162,238)]">
          <h1 className="text-5xl font-semibold pt-10">Hi There! 👋</h1>
          <p className="py-6 pr-20 max-w-3xl text-[1.7rem] font-normal">
            I'm Christopher Bui, a data scientist working in cancer research @ UCLA Health.
          </p>
          <p className="max-w-2xl text-[1.7rem] font-normal text-neutral-700">
            I am driven to find innovative solutions to highly impactful challenges!
          </p>
        </div>
      </div>
    </div>
  );
}

