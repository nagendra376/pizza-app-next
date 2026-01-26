export async function fetchPizzas() {
  const res = await fetch("/api/pizzaoftheday");
  if (!res.ok) throw new Error("Failed to fetch pizzas");
  return res.json();
}
