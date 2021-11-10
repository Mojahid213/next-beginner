import { useRouter } from "next/router";

export default function ProductId() {
  const route = useRouter();
  const { query } = route;
  return (
    <div>
      <h1 className="text-xl text-center">Product Details</h1>
      <h1 className="text-xl text-center">Product - {query.id}</h1>
    </div>
  );
}
