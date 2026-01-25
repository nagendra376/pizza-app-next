import styles from "./index.module.scss";

interface ButtonsProps {
  text: string;
  classname?: string;
}

export default function Buttons({ text, classname }: ButtonsProps) {
  return <button className={`${styles["buttons-style"]} ${classname}`}>{text}</button>;
}
