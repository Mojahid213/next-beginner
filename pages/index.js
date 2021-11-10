import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center">Home page</h1>
      <Link href="/blog">
        <a>Blog Page</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Product Page</a>
      </Link>
    </div>
  );
}
