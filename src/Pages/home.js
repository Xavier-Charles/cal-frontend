import React, { useState } from "react";
import Calendar from "../components/calendar";
import EventList from "../components/eventList";
// import Nav from "../components/nav";
import Navbar from "../components/navbar"
import Modal from "../components/modal";

import dummyEventsList from "../data/events";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-1 lg:grid-cols-12 lg:gap-4 p-4 max-w-screen-2xl mt-10 mx-auto">
        <Calendar events={dummyEventsList} />
        <EventList setShowModal={setShowModal} />
        <Modal show={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default Home;
