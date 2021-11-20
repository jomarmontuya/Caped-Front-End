import Image from "next/image";
import Link from "next/link";
import styles from "./sidebar.module.scss";

function Sidebar() {
  return (
    <div
      style={{ height: "100%" }}
      className={`w-25 ${styles.sidebar} d-none d-sm-block d-flex flex-column `}
    >
      <div className="position-fixed">
        <div>
          <h1 className="fs-2 fs-sm-1">Explore</h1>
        </div>
        <div>
          <div className="d-flex flex-column">
            <Link href="/">
              <a
                className={`my-3 ${styles.sidebarLinks} d-flex align-items-center  justify-content-sm-start`}
              >
                <Image
                  width="22px"
                  height="22px"
                  alt="lightning-icon"
                  src="/assets/lightning.png"
                />
                <span className={`d-none d-sm-block ${styles.sidebarText}`}>
                  New In
                </span>
              </a>
            </Link>

            <Link href="/">
              <a
                className={`my-3 ${styles.sidebarLinks} d-flex align-items-center justify-content-sm-start`}
              >
                <Image
                  width="22px"
                  height="22px"
                  alt="lightning-icon"
                  src="/assets/clothing.png"
                />
                <span className={` d-none d-sm-block ${styles.sidebarText}`}>
                  Clothing
                </span>
              </a>
            </Link>

            <Link href="/">
              <a
                className={`my-3 ${styles.sidebarLinks} d-flex align-items-center  justify-content-sm-start`}
              >
                <Image
                  width="22px"
                  height="22px"
                  alt="lightning-icon"
                  src="/assets/shoes.png"
                />
                <span className={` d-none d-sm-block ${styles.sidebarText}`}>
                  Shoes
                </span>
              </a>
            </Link>

            <Link href="/">
              <a
                className={`my-3 ${styles.sidebarLinks} d-flex align-items-center  justify-content-sm-start `}
              >
                <Image
                  width="22px"
                  height="22px"
                  alt="lightning-icon"
                  src="/assets/bag.png"
                />
                <span className={` d-none d-sm-block ${styles.sidebarText}`}>
                  {" "}
                  Accessories
                </span>
              </a>
            </Link>

            <Link href="/">
              <a
                className={`my-3 ${styles.sidebarLinks} d-flex align-items-center  justify-content-sm-start`}
              >
                <Image
                  width="22px"
                  height="22px"
                  alt="lightning-icon"
                  src="/assets/fitness.png"
                />
                <span className={` d-none d-sm-block ${styles.sidebarText}`}>
                  Active Wear
                </span>
              </a>
            </Link>

            <Link href="/">
              <a
                className={`my-3 ${styles.sidebarLinks} d-flex align-items-center  justify-content-sm-start`}
              >
                <Image
                  width="22px"
                  height="22px"
                  alt="lightning-icon"
                  src="/assets/Gift.png"
                />
                <span className={` d-none d-sm-block ${styles.sidebarText}`}>
                  Gift & Living
                </span>
              </a>
            </Link>

            <Link href="/">
              <a
                className={`my-3 ${styles.sidebarLinks} d-flex align-items-center justify-content-sm-start`}
              >
                <Image
                  width="22px"
                  height="22px"
                  alt="lightning-icon"
                  src="/assets/diamond.png"
                />
                <span className={` d-none d-sm-block ${styles.sidebarText}`}>
                  Inspiration
                </span>
              </a>
            </Link>
          </div>
        </div>
        {/* <div className="">
          <div>
            <Link href="/">
              <a
                className={`my-3 ${styles.sidebarLinks} d-flex align-items-center`}
              >
                <Image
                  width="47.13px"
                  height="47.13px"
                  alt="lightning-icon"
                  src="/assets/help.png"
                  objectFit="cover"
                />

                <span className={`d-none d-sm-block ${styles.sidebarText}`}>
                  Help Center
                </span>
              </a>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
