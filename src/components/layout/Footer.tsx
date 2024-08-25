import Logo from "@/components/layout/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="px-3 pt-4 pb-5 md:px-[60px] md:pt-20 md:pb-[60px]">
        <div className="md:flex md:justify-between md:pl-5 md:pr-[150px] md:mb-[172px]">
          <div className="mb-9 md:mb-0">
            <div className="mb-4">
              <Logo />
            </div>
            <div className="text-pewter-blue text-xs leading-6 max-w-[216px] md:max-w-[292px] md:text-base">
              <p>
                Our vision is to provide convenience and help increase your
                sales business.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold mb-5 text-dark-gunmetal md:mb-3">
              About
            </p>
            <ul>
              <li className="mb-4">
                <Link href="/">How it works</Link>
              </li>
              <li>
                <Link href="/">Created By</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-9 border-gray-200 sm:mx-auto" />
        <div className="text-xs leading-[14.4]x font-semibold text-dark-gunmetal flex flex-col gap-8 md:flex-row-reverse md:justify-between md:text-base">
          <div className="flex gap-5">
            <Link href="/">Privacy & Policy</Link>
            <Link href="/">Terms & Condition</Link>
          </div>
          <div>
            <p>©2024 CarFinder. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
