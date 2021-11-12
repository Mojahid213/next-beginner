import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:1337/dashboards");
  const data = await response.json();
  return data;
};

export default function dashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);

  console.log(data);

  if (error) {
    return <h1 className="text-2xl">Error has occured</h1>;
  }
  if (!data) {
    return <h1 className="text-2xl">Loading...</h1>;
  }
  return (
    <div>
      <h2 className="text-3xl mb-5">Dashboard</h2>
      <p className="text-xl">Posts - {data[0].posts}</p>
      <p className="text-xl">Likes - {data[0].likes}</p>
      <p className="text-xl">Followers - {data[0].followers}</p>
      <p className="text-xl">Following - {data[0].following}</p>
    </div>
  );
}
