import { useState, useEffect } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:1337/dashboards");
      const data = await response.json();
      setDashboardData(data[0]);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h1 className="text-2xl">Loading...</h1>;
  }
  return (
    <div>
      <h2 className="text-3xl mb-5">Dashboard</h2>
      <p className="text-xl">Posts - {dashboardData.posts}</p>
      <p className="text-xl">Likes - {dashboardData.likes}</p>
      <p className="text-xl">Followers - {dashboardData.followers}</p>
      <p className="text-xl">Following - {dashboardData.following}</p>
    </div>
  );
}
