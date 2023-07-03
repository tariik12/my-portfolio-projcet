import  { useRef } from "react";
import PropTypes from "prop-types";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { Typewriter } from "react-simple-typewriter";

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(10, -1, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 500);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) { 
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        
      </motion.div>
    </div>
  );
};

ParallaxText.propTypes = {
  children: PropTypes.string.isRequired,
  baseVelocity: PropTypes.number.isRequired
};

const Skill = () => {
  return (
    <div id="skill" className="">
      <div className="p-5 flex flex-col mx-auto">
        <h1 className="text-3xl font-thin italic mx-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-400 rounded-xl mb-10">
            <Typewriter
              words={["Expertise"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <div className="border">
          <>
            <ParallaxText baseVelocity={-5}> 
            <button className="btn">MotionFramer Motion</button>
            <button className="btn">MotionFramer Motion</button>
            </ParallaxText>
            <ParallaxText baseVelocity={5}>  Motion</ParallaxText>
            <ParallaxText baseVelocity={-5}> MotionFramer MotionFramer Motion</ParallaxText>
            <ParallaxText baseVelocity={5}> MotionFramer MotionFramer Motion</ParallaxText>
          </>
        </div>
      </div>
      <div>
        <h1 className="text-center mt-5 p-5">skill</h1>
        <div className="overflow-x-auto h-96"></div>
      </div>
    </div>
  );
};

export default Skill;
