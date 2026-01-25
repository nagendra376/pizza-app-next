import { useRouter } from "next/navigation";
import styles from "./index.module.scss";

interface ButtonsProps {
  text: string;
  classname?: string;
  href?: string;
}

export default function Buttons({ text, classname, href }: ButtonsProps) {
  const router = useRouter();
  return (
    <button
      className={`${styles["buttons-style"]} ${classname}`}
      onClick={() => {
        href && router.push(href);
      }}
    >
      {text}
    </button>
  );
}
