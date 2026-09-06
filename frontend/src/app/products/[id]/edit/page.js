async function EditProductPage ({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>EDIT PRODUCT</h1>
      <p>Product ID: {id}</p>
    </main>
  );
}

export default EditProductPage;