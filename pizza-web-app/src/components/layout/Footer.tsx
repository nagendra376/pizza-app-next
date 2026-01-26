"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchPizzas } from "@/app/api/getPizzaOfTheDay";

export default function Footer() {
  const {
    data: pizzas = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pizzas"],
    queryFn: fetchPizzas,
  });

  function getPizzaOfTheDay(pizzas: any[]) {
    if (!Array.isArray(pizzas) || pizzas.length === 0) {
      return null;
    }

    const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));

    const index = dayIndex % pizzas.length;
    return pizzas[index];
  }

  const pizzaOfTheDay = getPizzaOfTheDay(pizzas.data);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading pizza</p>;
  if (!pizzaOfTheDay) return null;

  return (
    <footer className="border-top pb-4">
      <h2 className="pizza-day py-4 text-center">Pizza of the Day</h2>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <h3>{pizzaOfTheDay.name}</h3>
            <p>{pizzaOfTheDay.description}</p>
            <p>From ${pizzaOfTheDay.sizes.S}</p>
          </div>

          <div className="col-md-6 text-center">
            <Image src={"/spin_pesto.webp"} alt={pizzaOfTheDay.name} width={300} height={200} />
          </div>
        </div>
      </div>
    </footer>
  );
}
