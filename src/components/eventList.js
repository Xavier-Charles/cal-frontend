import React from "react";
import dummyEventsList from "../data/events";
import styled from "styled-components";
import EventItem from "./eventItem";


const EventList = (props) => {
    // const [focused, setFocused] = useState(false);
    const handleItemEvent = (i, eventType, e) => {
        if (e.target.id !== "input_attend"){
        let tag = `item#${i}`;
        let elHeight = document.getElementById(tag)
            ? document.getElementById(tag).scrollHeight
            : 0;
        eventType === "click"
            ? document.getElementById(tag).clientHeight !== elHeight
                ? (document.getElementById(tag).style.height = `${elHeight}px`)
                : (document.getElementById(tag).style.height = "80px")
            : (document.getElementById(tag).style.height = "80px");
        }
        return
    };

    return (
      <EventStyles>
        <div class="py-0 h-4/6 px-3.5 overflow-auto">
          <p
            className="bg-emerald-50 border-cyan border-1 rounded px-1 py-0.5 float-right"
            onClick={() => props.setShowModal(true)}
          >
            Add Event
          </p>
          <span class="inline-block blueGray-300 font-bold text-lg mt-0 mb-5">
            Upcoming events this month{" "}
          </span>
          <ul class="p-0">
            {dummyEventsList.map((e, i) => {
              // let tag = `item#${i}`;
              // let eventDate = new Date(e.startDate);
              // let start = new Date(
              //     e.startDate + " " + e.startTime + "Z"
              // );
              // let end = new Date(e.endDate + " " + e.endTime + "Z");
              return (
                <EventItem
                  event={e}
                  index={i}
                  handleItemEvent={handleItemEvent}
                />
              );
            })}
          </ul>
        </div>
      </EventStyles>
    );
};

export default EventList;

const EventStyles = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    flex-grow:1;

    width: 20vw;
    min-width: 350px;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", sans-serif;
    text-rendering: optimizeLegibility;
    background: #fcfcfc;
    margin: 1vw 0;
   
`;
