import "./services.scss"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const variants = { 
    initial: { 
        x: -500,
        y: 100, 
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const { ref, inView } = useInView({
        threshold: 0.25,
        rootMargin: "-50px",
    });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={"animate"}>
    <motion.div className="textContainer" variants={variants} >
    <p>My goal is to gain more knowledge in the growing IT industry
    <br/> and prove to be a competent worker in any environment given</p><br/><hr/>
    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="./people.webp" alt=""/>
            <h1><motion.b whileHover={{color: "orange"}}>Projects </motion.b>Done</h1>
            <button>WHAT I DO?</button>
        </div>
    </motion.div>
    <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background: "lightgray",color:"black"}}>
            <h2>Hunger Hero<br/>A food donation application</h2><br/><br/>
            <p>This mobile application is developed in order to help consumers to donate food to the needy via contacting various NGO's
                that can act as charities and deliver food to the needy. 
            </p><br/><br/>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray",color:"black"}}>
            <h2>Injury prediction<br/>in football players</h2><br/><br/>
            <p>This project is about anticipating injury in players that are found to have frequent injuries. These players are considered to be weaklings
                and as a liability since they dont produce the value that they normally possess.
            </p><br/><br/>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray",color:"black"}}>
            <h2>Football Transfer Market Analysis<br/>Recommendation system</h2><br/><br/>
            <p>This project was done to build a system that could produce results about potential replacements for injury prone players. Finding and scouting young 
                players who can play in the same position considering their market value is done.
            </p><br/><br/>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray",color:"black"}}>
            <h2>No code Chatbot<br/>using Dialogflow</h2><br/><br/>
            <p>This project was done to build a chatbot that was done with no necessary hard code with the use of Dialogflow. Connecting it to phone calls and making 
                the bot answer them and respond appropriately by voice recognition was the key.
            </p><br/><br/>
            <button>Go</button>
        </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default Services