"use client";

import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data: MenuItem[]) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching menu:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading menu...</p>;

  return (
    <main className="container-grid py-4">
      <h1 className="mb-4"> <i className="bi bi-fork-knife text-warning"></i> Menu App</h1>

      <div className="container-fluid mx-4 py-4">
        <a href="#" className="fs-5 text-muted small  text-decoration:none"><i className="bi bi-info-circle ">More Info</i></a>
      </div>

<div className="input-group mb-3" style={{ maxWidth: "300px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Search menu..."
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-secondary"  >
        <i className="bi bi-search"></i>
      </button>
    </div>
      <div className="row">
        {menu.map((item) => (
          <div key={item.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card h-200 text-center">
              <div className="card-body bg-warning">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">{item.category}</p>
                <p className="fw-bold text-success">₹{item.price}</p>
                <button className="btn btn-primary"> <i className="bi bi-cart-check-fill"></i> Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
