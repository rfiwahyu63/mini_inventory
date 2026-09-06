async function EditCategoryPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>EDIT CATEGORY</h1>
      <p>Halaman ini untuk mengedit kategori dengan ID: {id}</p>
    </main>
  );
}

export default EditCategoryPage;