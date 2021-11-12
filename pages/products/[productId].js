import { useRouter } from "next/router";

export default function SingleProduct({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1 className="text-xl mt-5">Loading...</h1>;
  }
  return (
    <>
      <h2 className="text-3xl">
        {product.id} {product.name} {product.price}
      </h2>
      <p className="text-xl">{product.description}</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
      {
        params: { productId: "2" },
      },
      {
        params: { productId: "3" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { productId } = context.params;
  console.log(`Regenerating pruduct ${productId}`);
  const res = await fetch(`http://localhost:1337/data/${productId}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
