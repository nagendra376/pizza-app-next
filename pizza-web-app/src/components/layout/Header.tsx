import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header>
      <div className=" border-bottom">
        <div className="d-flex align-items-center">
          <div className="flex-grow-1"></div>

          <div className="d-flex align-items-center gap-2">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <span className={styles["logo-text"]}>Pizza Mania&apos;s</span>
          </div>

          <div className="flex-grow-1 text-end pe-5">
            <Image src="/cart-icon.png" alt="cart" width={35} height={35} />
            <span className="position-absolute top-40 start-200  translate-middle badge rounded-pill bg-danger">
              1
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
