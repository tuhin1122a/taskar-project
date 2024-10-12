import Logo from "../assets/tuhin12.jpg";
export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50 ">
      <div className="container mx-auto flex items-center justify-start gap-x-6 rounded-full">
        <a href="/">
          <img
            className="h-[45px] w-[45px] rounded-full ml-1 border-green-400 border-solid border-2"
            src={Logo}
            alt="Lws"
          />
        </a>
        <p className="text-3xl">Tuhin</p>
      </div>
    </nav>
  );
}
