import Buttons from "../ui/Button";
import styles from "./index.module.scss";

export default function Main() {
  const actions = [
    { label: "Order", path: "/order" },
    { label: "Past Orders", path: "/past-order" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <div
        className={`d-flex container position-relative align-items-center justify-content-center  ${styles.footer}`}
      >
        <div className="row w-75 align-items-center">
          {/* left column */}
          <div className="col-md-6">
            <span className={styles["sub-title-text"]}>Pizza Mania&apos;s</span>
            <h3 className={styles["title-text"]}>Pizza & Art at a location near you</h3>
          </div>
          {/* right column */}
          <div className="col-md-6 d-flex justify-content-end">
            <div className=" d-flex flex-column flex-grow-1 justify-content-center align-items-center gap-2 ">
              {actions.map((item, index) => (
                <Buttons
                  classname={styles["main-buttons"]}
                  key={index}
                  text={item.label}
                  href={item.path}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
