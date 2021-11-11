export default function Post({ post }) {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <h1 className="text-center mt-16 text-3xl">Loading...</h1>;
  // }
  return (
    <>
      <h1 className="text-3xl">
        {post.id} - {post.title}
      </h1>
      <p className="text-2xl mt-5">{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();
  //   const paths = data.map((post) => {
  //     return {
  //       params: { postId: `${post.id}` },
  //     };
  //   });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  console.log(`Generating page for /posts/${params.postId}`); //Consoling the getStaticProps build output
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
