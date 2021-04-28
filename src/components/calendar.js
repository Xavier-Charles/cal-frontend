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
                    style={{ height: 500 }}
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

    width: 350px;
    min-width: 350px;
    height: 100%;

    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", sans-serif;
    text-rendering: optimizeLegibility;
    background: #fcfcfc;
`;
