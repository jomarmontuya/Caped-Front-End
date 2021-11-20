import style from "./banner.module.scss";

export interface Props {
  children?: React.ReactNode;
  backgroundImageSrc?: string;
}

export default function App(props: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImageSrc})`,
        cursor: "pointer",
      }}
      className={` ${style.backgroundContainer}`}
    >
      {props.children}
    </div>
  );
}
