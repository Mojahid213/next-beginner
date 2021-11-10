import { useRouter } from "next/router";

export default function Doc() {
  const route = useRouter();
  const { params = [] } = route.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature - {params[0]} and concept - {params[1]}
      </h1>
    );
  }
  if (params.length === 1) {
    return <h1>Viewing docs for feature - {params[0]}</h1>;
  }
  return <h1 className="text-3xl text-center">Docs Homepage</h1>;
}
