import style from "./model.module.scss";
import Image from "next/image";

export interface Props {
  children?: React.ReactNode;
  profileImageSrc?: string;
}

export default function App(props: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.profileImageSrc})`,
        cursor: "pointer",
      }}
      className={` ${style.profileContainer} d-flex justify-content-end flex-fill `}
    >
      <div
        className="p-1"
        onClick={() => {
          console.log("testing");
        }}
      >
        <Image
          height={38}
          width={38}
          src="/assets/heart.png"
          alt="heart-like"
        />
      </div>
      {props.children}
    </div>
  );
}
