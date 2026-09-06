function SummaryCard({ title, value, icon: Icon }){
  return (
    <div className="rounded-xl border p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <Icon size={20} />
      </div>

        <h2 className="mt-2 text-2xl font-semibold">
          {value}
        </h2>
    </div>
  );
}

export default SummaryCard;