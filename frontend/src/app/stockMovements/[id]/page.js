async function StockMovementDetailPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>STOCK MOVEMENT DETAIL</h1>
      <p>Halaman ini menampilkan detail pergerakan stok dengan ID: {id}</p>
    </main>
  );  
}

export default StockMovementDetailPage;