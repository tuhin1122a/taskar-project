import Logo from "../assets/tuhin12.jpg";
export default function Header() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50 ">
      <div className="container mx-auto flex items-center justify-between gap-x-6 rounded-full">
        <a href="/">
          <img className="h-[45px] rounded-full" src={Logo} alt="Lws" />
        </a>
      </div>
    </nav>
  );
}
