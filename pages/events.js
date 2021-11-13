import { useState } from "react";
import { useRouter } from "next/router";

export default function EventList({ eventLists }) {
  const [events, setEvents] = useState(eventLists);
  const router = useRouter();

  //   fetching sport category
  const fetchSports = async () => {
    const response = await fetch(
      "http://localhost:1337/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  //   fetching technology category
  const fetchTechnology = async () => {
    const response = await fetch(
      "http://localhost:1337/events?category=technology"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=technology", undefined, { shallow: true });
  };
  //   fetching food category
  const fetchFood = async () => {
    const response = await fetch("http://localhost:1337/events?category=food");
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=food", undefined, { shallow: true });
  };
  //   fetching art category
  const fetchArt = async () => {
    const response = await fetch("http://localhost:1337/events?category=art");
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=art", undefined, { shallow: true });
  };

  return (
    <>
      <h2 className="text-center border-b-2 border-black text-3xl">
        Lists of events
      </h2>
      <div className="my-4 p-2">
        <button
          onClick={fetchSports}
          className="border-2 border-black p-3 mx-2"
        >
          Sports
        </button>
        <button onClick={fetchFood} className="border-2 border-black p-3 mx-2">
          Food
        </button>
        <button onClick={fetchArt} className="border-2 border-black p-3 mx-2">
          Art
        </button>
        <button
          onClick={fetchTechnology}
          className="border-2 border-black p-3 mx-2"
        >
          Technology
        </button>
      </div>
      {events.map((event) => {
        return (
          <div key={event.id} className="mt-5">
            <h1 className="mb-2 text-2xl">
              {event.id} {event.title} | {event.category}
            </h1>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=${category}` : "";
  const response = await fetch(`http://localhost:1337/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventLists: data,
    },
  };
}
