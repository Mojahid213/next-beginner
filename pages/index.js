import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };
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
      <button
        onClick={handleClick}
        className="p-3 bg-green-500 block mt-5 rounded-lg ml-5 focus:ring-2 focus:ring-black ring-offset-2 transition duration-200"
      >
        Place order
      </button>

      {/* Next js pre rendering */}
      <h1 className="text-center mt-10 text-4xl border-b-2">
        Next js pre rendering
      </h1>

      <Link href="/users">
        <a className="text-center text-3xl">Users</a>
      </Link>
    </div>
  );
}
