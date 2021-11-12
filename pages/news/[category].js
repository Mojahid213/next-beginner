export default function Category({ details }) {
  return (
    <>
      {details.map((detail) => {
        return (
          <div key={detail.id}>
            <h1 className="text-3xl">
              {detail.id} {detail.title} {detail.category}
            </h1>
            <p className="text-2xl">{detail.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader("set-cookie", ["name=Mojahid"]);
  const response = await fetch(
    `http://localhost:1337/news?category_eq=${params.category}`
  );
  console.log(`pre-rendeging news articles for category ${params.category}`);
  const data = await response.json();
  return {
    props: {
      details: data,
    },
  };
}
