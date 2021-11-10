export default function Post({ post }) {
  return (
    <>
      <h1 className="text-3xl">
        {post.id} - {post.title}
      </h1>
      <p className="text-2xl">{post.body}</p>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
