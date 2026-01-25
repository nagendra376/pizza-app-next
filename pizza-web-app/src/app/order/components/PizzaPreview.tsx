import Image from "next/image";

export default function pizzaPreview() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h3>The Pepperoni Pizza</h3>
      <p>Mozzarella Cheese, Pepperoni</p>
      <Image src={"/spin_pesto.webp"} alt="pizza" width={200} height={200} />
    </div>
  );
}
