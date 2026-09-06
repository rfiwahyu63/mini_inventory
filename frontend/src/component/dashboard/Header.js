function DashboardHeader(){
  return(
    <header className="flex items-center justify-between border-b p-6 py-4">
      <div>
        <h1 className="text-xl font-semibold">
          Dasboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Kelola data inventory
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">
          Admin
        </span>
      </div>
    </header>
  );
}

export default DashboardHeader;