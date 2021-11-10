export default function User({ user }) {
  return (
    <>
      <p className="text-3xl">{user.name}</p>
      <p className="text-3xl">{user.email}</p>
    </>
  );
}
