import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-top pb-4 ">
      <h2 className="pizza-day py-4" style={{ textAlign: "center" }}>
        Pizza of the Day
      </h2>
      <div className=" d-flex container position-relative align-items-center justify-content-center">
        <div className="row w-75 mx-auto align-items-center justify-content-center">
          <div className="col-md-6 text-center">
            <h3>The Spinach Pesto Pizza</h3>
            <p>Spinach, Artichokes, Tomatoes, Sun-dried Tomatoes, Garlic, Pesto Sauce</p>
            <p>$12</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Image src="/spin_pesto.webp" alt="Pizza of the Day" width={300} height={200} />
          </div>
        </div>
      </div>
    </footer>
  );
}
