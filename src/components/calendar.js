import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/sass/styles.scss";
import dummyEventsList from "../data/events";
import styled from "styled-components";

const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {
    return (
        <CalendarStyles>
            <div>
                <Calendar
                    localizer={localizer}
                    events={dummyEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: "65vh"}}
                    views={["month"]}
                />
            </div>
        </CalendarStyles>
    );
};

export default CalendarComponent;

const CalendarStyles = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    width: 40vw;
    min-width: 600px;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", sans-serif;
    text-rendering: optimizeLegibility;
    background: #fcfcfc;
    margin: 1vw 0;

    .rbc-event {
        background-color: #00c4cc;
    }
    .rbc-toolbar-level {
        font-size: 1.8rem;
        font-weight: 500;
    }
    .rbc-toolbar span button {
        font-size: 1rem;
    }
`;
