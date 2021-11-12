export default function NewsArticleList({ articles }) {
  return (
    <>
      <h1 className="text-4xl mb-5">Lists of news article</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h1 className="text-3xl">
              {article.id}- {article.title} {article.category}
            </h1>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:1337/news");
  const data = await res.json();
  console.log("pre-rendering newsArticleLists");
  return {
    props: {
      articles: data,
    },
  };
}
