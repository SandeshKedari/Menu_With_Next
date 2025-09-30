import { NextResponse } from "next/server";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export async function GET() {
  const menuItems: MenuItem[] = [
    { id: 1, name: "Pizza", price: 299, category: "Main Course" },
    { id: 2, name: "Burger", price: 149, category: "Snacks" },
    { id: 3, name: "Pasta", price: 199, category: "Main Course" },
    { id: 4, name: "French Fries", price: 99, category: "Snacks" },
    { id: 5, name: "Coke", price: 49, category: "Beverage" },
  ];

  return NextResponse.json(menuItems);
}
