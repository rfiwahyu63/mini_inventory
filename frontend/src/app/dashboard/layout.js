import Sidebar from "@/component/dashboard/Sidebar"; 

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside>
        <Sidebar />
      </aside>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;