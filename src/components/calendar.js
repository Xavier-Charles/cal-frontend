import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
import dummyEventsList from "../data/events";

const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {
  return (
    <Calendar
      localizer={localizer}
      events={dummyEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "65vh" }}
      views={["month"]}
    />
  );
};

export default CalendarComponent;
