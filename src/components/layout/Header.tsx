import searchNormal from '@/assets/icons/search-normal.svg';
import Logo from "@/components/layout/Logo";
import Image from "next/image";
import Link from "next/link";


const Header: React.FC = () => {
  return (
    <header className="bg-white pt-11 pb-6 px-14 flex flex-col items-center text-dark-electric-blue md:flex-row justify-between md:py-10 px-[60px]">
      <div className="mb-9 md:mb-0">
        <Logo />
      </div>
      <div className="relative mb-3 md:mb-0">
        <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none md:ps-5">
          <Image
            src={searchNormal.src}
            alt="search for your car"
            width={24}
            height={24}
          />
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-14 border border-beau-blue rounded-lg bg-gray-50 focus:outline-none md:rounded-3xl md:ps-16 lg:min-w-[492px]"
          placeholder="Search for your car ..."
        />
      </div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/favorite" className="leading-6">
              Favorite
            </Link>
          </li>
          <li>
            <Link href="/login" className="leading-6">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
