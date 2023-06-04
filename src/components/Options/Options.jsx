import React, { useRef } from "react";
import "./Options.css";
import Cards from "../../Cards/Cards";

import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};


const Pagefirst = ({accname})=>{
  return(
    <>
    <div className="heading"><h1>{accname}</h1></div>
    <div className="fullpage">
        <button className="btn">
          hello
        </button>
        <button className="btn">
          hello
        </button>
        <button className="btn">
          hello
        </button>
        <button className="btn">
          hello
        </button>
      </div>
      </>
  )
}

const Box2 = ({accname}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
    <Pagefirst accname={accname}/>
    </motion.div>
  );
};


const Box0 = ({ giveeVote0 }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1> <Cards giveeVotee={giveeVote0}/></h1>
    </motion.div>
  );
};
const Box1 = ({ giveeVote1 }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1> <Cards giveeVotee={giveeVote1}/></h1>
    </motion.div>
  );
};
const Box3 = ({ giveeVote2 }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1> <Cards giveeVotee={giveeVote2}/></h1>
    </motion.div>
  );
};
const Box4 = ({ giveeVote3 }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1> <Cards giveeVotee={giveeVote3}/></h1>
    </motion.div>
  );
};

export default function Options({accname,giveeVote0,giveeVote1,giveeVote2,giveeVote3}) {
  const ref = useRef(null);
  const handleclick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
   <>
      
      <video autoPlay loop muted id="myVideo">
            <source src="/Videos/code3.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
    
      <Box2 accname= {accname}/>
    
        <Box0 giveeVote0={giveeVote0}>
          
        </Box0>
        <Box1 giveeVote1={giveeVote1}>
         
        </Box1>
        <Box3 giveeVote2={giveeVote2}>
      
        </Box3>
        <Box4 giveeVote3={giveeVote3}>
         
        </Box4>
      
    </>
  );
}
