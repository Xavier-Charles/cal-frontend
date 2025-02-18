import React from "react";
import EventItem from "./eventItem";


const EventList = (props) => {
  console.log(props);
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
      // <EventStyles>
      <div class="mt-8 lg:mt-0 col-span-4 py-0 h-4/6 p-0 lg:px-3.5">
        {/* <p
          className="bg-emerald-50 border-cyan border-1 rounded px-1 py-0.5 float-right"
          onClick={() => props.setShowModal(true)}
        >
          Add Event
        </p> */}
        {/* <button
          class="bg-cerise hover:bg-cerise-dark text-white font-bold py-2 px-4 rounded float-right"
          onClick={() => props.setShowModal(true)}
        >
          Add Event
        </button> */}
        <div class="mt-0 mb-10">
          <button
            onClick={() => props.setShowModal(true)}
            class="bg-cerise hover:bg-cerise-dark float-left lg:float-right inline-block px-6 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition rounded shadow ripple hover:shadow-lg focus:outline-none"
          >
            Add An Event
          </button>
          {/* <span class="inline-block blueGray-300 font-bold text-lg mt-0 mb-3.5">
            Upcoming events{" "}
          </span> */}
        </div>
        <div class="cstm-hide-scroll cstm-h500 lg:overflow-y-scroll">
          <ul class="p-0">
            {props.events.map((e, i) => {
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
      </div>
      // </EventStyles>
    );
};

export default EventList;


