import React, { useState } from "react";
import Calendar from "../components/calendar";
import EventList from "../components/eventList";
// import Nav from "../components/nav";
import Navbar from "../components/navbar"
import Modal from "../components/modal";
import TypeFilter from "../components/filter";

import dummyEventsList from "../data/events";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterValue = (event) => {
    setFilterValue(event.target.value);
    console.log(event.target.value);
  };
  const filteredArray = (array, filterValue) =>{
    if (filterValue === "None" || filterValue === "") return array;
    else return array.filter((element) => element.type.includes(filterValue));
  }
    
  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-1 lg:grid-cols-12 lg:gap-4 p-4 max-w-screen-2xl mt-10 mx-auto">
        <TypeFilter
          handleFilterValue={handleFilterValue}
          filterValue={filterValue}
        />
        <Calendar events={filteredArray(dummyEventsList, filterValue)} />
        <EventList events={filteredArray(dummyEventsList, filterValue)} setShowModal={setShowModal} />
        <Modal show={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
}

export default Home;
