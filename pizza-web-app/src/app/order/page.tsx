import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import styles from "./index.module.scss";
import CartSummary from "./components/CartSummary";
import PizzaPreview from "./components/PizzaPreview";
import OrderForm from "./components/OrderForm";

export default function order() {
  return (
    <>
      <Header />

      <div className={`${styles.orderGrid} container`}>
        <div className={styles.colBorder} style={{ width: "100%", padding: "50px 20px" }}>
          <OrderForm />
        </div>

        <div className={styles.colBorder} style={{ width: "100%", padding: "50px 20px" }}>
          <PizzaPreview />
        </div>

        <div style={{ width: "100%", padding: "50px 20px" }}>
          <CartSummary />
        </div>
      </div>

      <Footer />
    </>
  );
}
