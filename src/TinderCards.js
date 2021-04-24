import React, { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import axios from './axios';


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "❤",
            imgUrl: "/images/22.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/21.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/20.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/19.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/18.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/17.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/16.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/15.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/14.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/13.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/12.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/11.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/10.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/9.jpeg"
        },
        {
            name: "❤",
            imgUrl: "/images/8.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/7.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/6.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/5.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/4.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/3.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/2.jpg"
        },
        {
            name: "❤",
            imgUrl: "/images/1.jpg"
        },

    ]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const req = await axios.get('/tinder/cards');

    //         setPeople(req.data);
    //     }
    //     fetchData();
    // }, []);

    // console.log(people);

    // const swiped = (direction, nameToDelete) => {
    //     console.log("removing: " + nameToDelete);
    // };

    // const outOfFrame = (name) => {
    //     console.log(name + " left the screen");
    // };

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards
