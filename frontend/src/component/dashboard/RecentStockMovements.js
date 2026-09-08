function RecentStockMovements({movements =[]}) {
  return (
    <section className="mt-6 rounded-xl border p-4">
      <h2 className="mb-4 text-lg font-semibold">Aktifitas Stok Terbaru</h2>

      {movements.length === 0 ? (<p>Belum ada aktivitas stok</p>) : (
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border border-borderPrimary">
            <tr>
              <th className="px-4 py-3">Produk</th>
              <th className="px-4 py-3">Tipe</th>
              <th className="px-4 py-3">Jumlah</th>
              <th className="px-4 py-3">Waktu</th>
            </tr>
          </thead>

          <tbody>
            {movements.map((movement) => (
              <tr
                key={movement.id}
                className="border border-borderSecondary">
                <td className="px-4 py-3 font-medium">
                  {movement.product_name}
                </td>
                <td className="px-4 py-3">
                  <span
                    className=
                    {movement.type === "in"
                        ? "rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700"
                        : "rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700"
                    }>
                    {movement.type === "in" ? "Masuk" : "Keluar"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {movement.type === "in" ? "+" : "-"} {movement.quantity}
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {movement.created_at}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </section>
  );
}

export default RecentStockMovements;
