async function ProductDetailPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>PRODUCT DETAIL</h1>
      <p>Detail produk dengan ID: {id}</p>
    </main>
  );
}

export default ProductDetailPage;