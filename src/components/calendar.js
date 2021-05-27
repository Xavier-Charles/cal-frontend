import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";

const localizer = momentLocalizer(moment);

function eventStyleGetter(event, start, end, isSelected) {

  var style = {
    borderRadius: "2px",
    opacity: 0.8,
    color: "#000",
    border: "0px",
    display: "block",
    padding: "0 5px",
  };
  return {
    style: style,
    className: `--${event.type[0]}`,
  };
}

const CalendarComponent = (props) => {
  const events = props.events.map(
    ({ name: title, startDate, startTime, endDate, endTime, ...rest }) => ({
      title,
      start: startDate + " " + startTime,
      end: endDate + " " + endTime,
      ...rest,
    })
  );

  return (
    <div class="col-span-8">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "34.5rem" }}
        views={["month"]}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default CalendarComponent;
