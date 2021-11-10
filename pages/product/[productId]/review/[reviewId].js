import { useRouter } from "next/router";

export default function Review() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1 className="text-2xl">
      Review - {reviewId} of product - {productId}
    </h1>
  );
}
