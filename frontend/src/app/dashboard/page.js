import DashboardSummary from "./dashboardSummary";
import RecentStockMovements from "@/component/dashboard/RecentStockMovements";

function DashboardPage() {
  const movements = [
    {
      id: 1,
      product_name: "Beras 5kg",
      type: "in",
      quantity: 10,
      created_at: "Hari ini",
    },
    {
      id: 2,
      product_name: "Gula 1kg",
      type: "out",
      quantity: 5,
      created_at: "Kemarin",
    },
    {
      id: 3,
      product_name: "Minyak 1L",
      type: "in",
      quantity: 20,
      created_at: "2 hari lalu",
    },
  ];

  return (
    <div>
      <DashboardSummary />
      <RecentStockMovements movements={movements} />
    </div>
  );
}

export default DashboardPage;