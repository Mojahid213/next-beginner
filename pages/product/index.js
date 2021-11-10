import Link from "next/link";

export default function Products({ productId = 50 }) {
  return (
    <div>
      <h1 className="text-3xl text-center">Product Page</h1>

      <Link href="/">
        <a className="m-3 text-xl">Back to Home</a>
      </Link>
      <ul>
        <Link href="/product/1">
          <a>Product-1</a>
        </Link>
        <br />
        <Link href="/product/2">
          <a>Product-2</a>
        </Link>
        <br />
        <Link href="/product/3" replace>
          <a>Product-3</a>
        </Link>
        <br />
        <Link href={`/product/${productId}`}>
          <a>Product-{productId}</a>
        </Link>
      </ul>
    </div>
  );
}
