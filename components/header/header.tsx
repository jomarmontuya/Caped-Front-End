import Image from "next/image";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import logo from "../../public/assets/logo.png";
import style from "./header.module.scss";

function Header() {
  return (
    <div className=" d-lg-flex py-4  position-sticky top-0 bg-white border-bottom">
      {/* Logo  */}
      <div className="d-flex justify-content-center  flex-fill mx-auto d-lg-inline-flex justify-content-lg-start ">
        <Image
          placeholder="blur"
          width="101px"
          height="44px"
          objectFit="contain"
          src={logo}
          alt="logo"
        />
      </div>
      {/* Search Form  */}
      <div className="d-none d-lg-flex flex-lg-fill">
        <Image
          width="24px"
          height="24px"
          objectFit="contain"
          src="/assets/search-icon.png"
          alt="searchIcon"
        />

        <Form.Control
          className={`border-0 h-100 shadow-none`}
          type="text"
          placeholder="Search Store"
        />
      </div>
      {/* Links */}
      <div className="d-flex justify-content-between align-items-center flex-fill mt-4 mt-lg-0 ">
        <Link href="#">
          <a className={style.navlinks}>Products </a>
        </Link>
        <Link href="#">
          <a className={style.navlinks}>Story </a>
        </Link>
        <Link href="#">
          <a className={style.navlinks}>Manufacturing </a>
        </Link>
        <Link href="#">
          <a className={style.navlinks}>Packaging </a>
        </Link>
        <Link href="#">
          <a className="h-50 pt-1 pt-lg-0">
            <Image
              width="24px"
              height="24px"
              objectFit="contain"
              src="/assets/basket.png"
              alt="searchIcon"
            />
          </a>
        </Link>
        <Link href="#">
          <a className="h-50 pt-1 pt-lg-0">
            <Image
              width="24px"
              height="24px"
              objectFit="contain"
              src="/assets/person.png"
              alt="searchIcon"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Header;
