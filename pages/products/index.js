import Link from "next/link";

export default function Products({ products }) {
  return (
    <>
      <h1 className="text-center text-3xl my-2 border-b-2 border-black">
        Product Lists
      </h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>
              {product.id} {product.name} {product.price}
            </h1>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  console.log("Generating / Regenerating ProductList");
  const res = await fetch("http://localhost:1337/data");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 20,
  };
}
