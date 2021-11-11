import Link from "next/link";

export default function PostLists({ posts }) {
  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-5">Lists of posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} passHref>
              <h1 className="mb-5">
                {post.id} - {post.title}
              </h1>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
