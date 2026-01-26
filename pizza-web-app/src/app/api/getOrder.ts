export async function getOrders({ queryKey }: any) {
  const [_key, page] = queryKey;

  const res = await fetch(`/api/orders?page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch orders");
  }

  return res.json();
}
