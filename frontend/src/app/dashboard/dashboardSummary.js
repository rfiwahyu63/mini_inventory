import { Package,
  TriangleAlert,
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react"; 

import SummaryCard from "@/component/dashboard/SummaryCard";

const summaryCards = [
  {
    title: "Total Produk",
    value: 0,
    icon: Package,
  },
  {
    title: "Stok Menipis",
    value: 0,
    icon: TriangleAlert,
  },
  {
    title: "Stok Masuk",
    value: 0,
    icon: ArrowDownToLine,
  },
  {
    title: "Stok Keluar",
    value: 0,
    icon: ArrowUpFromLine,
  },
]

function DashboardSummary() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {summaryCards.map((card) => (
        <SummaryCard 
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
        />
      ))}
    </div>
  );
}

export default DashboardSummary;