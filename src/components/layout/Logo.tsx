import logo from '@/assets/icons/logo.svg';
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo.src}
        width={148}
        height={44}
        alt={"Car Finder Logo"}
      />
    </Link>
  );
};

export default Logo;
