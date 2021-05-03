import React, { useState } from "react";
import Calendar from "../components/calendar";
import EventList from "../components/eventList";
import Nav from "../components/nav";
import Modal from "../components/modal";
import styled from "styled-components";

function Home() {
    const [showModal, setShowModal] = useState(false);
    return (
        <HomeStyle>
            <Nav />
            <div className="homeWrapper">
                <Calendar />
                <EventList setShowModal={setShowModal} />
                <Modal show={showModal} setShowModal={setShowModal} />
            </div>
        </HomeStyle>
    );
}

export default Home;

const HomeStyle = styled.div`
    .homeWrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 9vw;
        justify-content: center;
    }
`;
