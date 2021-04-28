import React from "react";
import Calendar from "../components/calendar";
import EventList from "../components/eventList";
import styled from 'styled-components'

function Home() {
    return (
        <HomeStyle>
            <Calendar />
            <EventList />
        </HomeStyle>
    );
}

export default Home;

const HomeStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;
