import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailPage = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: "no-store", //server side data fethch holo fole ssr holo not ssg
  });
  const data = await res.json();

  return (
    <div>
      <ProductDetails product={data}></ProductDetails>
    </div>
  );
};

export default ProductDetailPage;
