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
  const { params } = context;
  const res = await fetch(
    `http://localhost:1337/news?category_eq=${params.category}`
  );
  const data = await res.json();
  return {
    props: {
      details: data,
    },
  };
}
