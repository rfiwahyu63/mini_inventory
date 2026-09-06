async function CategoryDetailPage({ params }) {
  const { id } = await params;
  return (
    <main>
      <h1>CATEGORY DETAIL</h1>
      <p>Halaman ini menampilkan detail kategori dengan ID: {id}</p>
    </main>
  );
}

export default CategoryDetailPage;