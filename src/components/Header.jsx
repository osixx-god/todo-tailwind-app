function Header({ theme, themeToggle }) {
  return (
    <header
      className={`${
        theme === "light"
          ? 'bg-[url("/images/bg-desktop-light.jpg")]'
          : 'bg-[url("/images/bg-desktop-dark.jpg")]'
      }
          bg-center bg-cover px-4 h-72 py-8 pt-12 pb-24`}
    >
      <div className="flex justify-between mx-auto max-w-3xl">
        <h1 className="text-4xl text-white font-bold tracking-widest">TODO</h1>
        <img
          src={
            theme === "light" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"
          }
          onClick={themeToggle}
          alt="sun icon"
          className="shrink-0 w-8 h-8 hover:cursor-pointer hover:opacity-65 transition duration-200 hover:scale-110 "
        />
      </div>
    </header>
  );
}
export default Header;
