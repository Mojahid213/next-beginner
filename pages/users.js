import User from "../components/user";

export default function UserList({ users }) {
  return (
    <>
      <h1 className="text-center text-4xl">Lists of users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user}></User>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}
