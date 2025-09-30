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
    { id: 6, name: "Fries", price: 60, category: "Snacks" },
    { id: 7, name: "Paneer Patty", price: 149, category: "Main Course" },
    { id: 8, name: "Salted Fries", price: 69, category: "Snacks" },
    { id: 9, name: "Peri Peri Fries", price: 59, category: "Snacks" },
    { id: 10, name: "Chiken Burger", price: 149, category: "Snacks" },
    { id: 11, name: "Paneer Tikka", price: 179, category: "Main Course" },
    { id: 12, name: "Cold Coffee", price: 120, category: "Beverage" },
    { id: 13, name: "Hot Coffee", price: 120, category: "Beverage" },
  ];

  return NextResponse.json(menuItems);
}
