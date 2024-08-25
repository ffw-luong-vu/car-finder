import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="inline-block w-32">
      <Image
        src="/images/logo.svg"
        width={148}
        height={44}
        alt={"Car Finder Logo"}
      />
    </Link>
  );
};

export default Logo;
