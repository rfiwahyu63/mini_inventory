"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
  {
    name: "Stock Movements",
    href: "/dashboard/stock-movements",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r p-6">
      <h1 className="mb-8 text-xl font-bold">
        Mini Inventory
      </h1>

      <nav className="flex flex-col gap-2">
        {menus.map((menu) => {
          const isActive =
            menu.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(menu.href);

            return (
              <Link 
                key={menu.href}
                href={menu.href}
                className={`rounded-lg px-3 py-2 ${
                  isActive
                    ? "bg-primary font-semibold"
                    : "hover:bg-primary"
                }`}
              >
              {menu.name}
              </Link>
            );
        })}
      </nav>
    </aside>
  );
}
