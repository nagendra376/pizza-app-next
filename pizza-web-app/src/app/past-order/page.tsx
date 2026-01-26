"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../api/getOrder";
import { useState } from "react";

export default function PastOrderPage() {
  const [page, setPage] = useState(1);
  const {
    data: orders = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["orders", page],
    queryFn: getOrders,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading orders</p>;

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleLast = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Header />

      <div className="p-5 ">
        <table style={{ width: "100%" }}>
          <thead style={{ backgroundColor: "#33670a" }}>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={3} className="center">
                  Loading orders
                </td>
              </tr>
            )}
            {orders.data?.length === 0 && (
              <tr>
                <td colSpan={3} className="center">
                  No data available
                </td>
              </tr>
            )}
            {orders.data?.map((item: any) => (
              <tr key={item.order.order_id}>
                <td>{item.order.order_id}</td>
                <td>{item.order.date}</td>
                <td>{item.order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center align-items-center pt-3">
          <button disabled={page === 1} className="buttons" onClick={handleLast}>
            Previous
          </button>
          <span className="px-4">{page}</span>
          <button
            disabled={!orders.data || orders.data.length === 0}
            className="buttons"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
