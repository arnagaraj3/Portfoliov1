import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items =[{
    id: 1,
    title: "Full Stack Development Internship",
    img: `/Internship Certificate.jpg`,
    desc: "Stigmata Techno Solutions LLP provided a nurturing environment and helped me to gain experience in the field by performing projects.",
},
{
    id: 2,
    title: "Udemy Full Stack Development Certificate",
    img: `/udemy full stack-1.png`,
    desc: "Learned and implemented various exercises in HTML, CSS, Javascript, React and Bootstrap",
},
{
    id: 3,
    title: "IIT Bombay Java training",
    img: `/Java certificate-1.png`,
    desc: "Java training from Spoken Tutorial Project, IIT Bombay helped me to strengthen myself in various technical aspects.",
},
{
    id: 4,
    title: "Brain Computing Interface Workshop",
    img: `/bci.jpg`,
    desc: "Pantech Solutions hosted a workshop about brain computing interface and it has opened my perspective of Human-Computer Interactions to a different level.",
},
];

const Single=({item}) => {

    const ref= useRef();

    const {scrollYProgress} = useScroll({target: ref,//offset: ["start start", "end start"]

    });

    const y= useTransform(scrollYProgress,[0,1],[-300,300]);
    return (
    <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt=""/>
                </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
            </motion.div>
            </div>
        </div>
    </section>
    );
};

const Portfolio = () => {

    const ref=useRef();
    const {scrollYProgress} = useScroll({target: ref, offset: ["end end", "start start"]});

    const scaleX=useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Certificates</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio