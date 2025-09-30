"use client";
import { useEffect, useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => {
        if (!res.ok) throw new Error("API error " + res.status);
        return res.json();
      })
      .then((data: MenuItem[]) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">Loading menu...</p>;

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">🍴 Menu App</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-2xl p-4">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-500">{item.category}</p>
            <p className="text-green-600 font-bold mt-2">₹{item.price}</p>
            <button className="mt-4 bg-info text-black px-4 py-2 rounded-xl hover:bg-red">
              Add to Cart
            </button>
          </div>

        ))}
      </div>
    </main>
  );
}
