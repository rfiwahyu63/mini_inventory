import DashboardSidebar from "@/component/dashboard/Sidebar"; 
import DashboardHeader from "@/component/dashboard/Header"

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
        <DashboardSidebar />
      
    <div className="flex min-w-0 flex-1 flex-col">
        <DashboardHeader />

    <main className="flex-1 p-6">
          {children}
    </main>
      </div>
    </div>
  );
}

export default DashboardLayout;