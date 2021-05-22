import React, { useState } from "react";
import Calendar from "../components/calendar";
import EventList from "../components/eventList";
// import Nav from "../components/nav";
import Navbar from "../components/navbar"
import Modal from "../components/modal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex flex-row flex-wrap justify-center m-20">
        <Calendar />
        <EventList setShowModal={setShowModal} />
        <Modal show={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default Home;
