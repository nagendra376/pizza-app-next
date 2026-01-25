import styles from "../index.module.scss";

export default function OrderForm() {
  return (
    <div className="d-flex flex-column gap-3 align-items-center">
      <div>
        <span className=""> Pizza Type</span>
      </div>
      <div className="w-100">
        <select name="pizzaType" id="pizzaType" className="w-100 p-1">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div className={styles["pizza-size"]}>
        <div className="d-flex align-items-center justify-content-center">
          <span className={styles["title"]}>Pizza Size</span>
        </div>
        <div className={styles["size-options"]}>
          <input type="radio" name="pizza_size" id="small" />
          <label htmlFor="small"> Small</label>
          <input type="radio" name="pizza_size" id="medium" />
          <label htmlFor="medium"> Medium</label>
          <input type="radio" name="pizza_size" id="large" />
          <label htmlFor="large"> Large</label>{" "}
        </div>
      </div>
      <div>
        <button className={styles["cart"]}>add to Cart </button>
      </div>
    </div>
  );
}
