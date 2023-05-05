import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


export const AnimationTxt = ({ children, index }) => {

const ref = useRef(null);

const isInView = useInView(ref);

const activateAnimation = useAnimation();

console.log(isInView)

useEffect(() => {
    if (isInView) {
    activateAnimation.start('center')}
    else {
        activateAnimation.start(index % 2 === 0? 'left': 'right')
    }
}, [isInView])


    return <div ref={ref} style={{overflow: 'hidden', position: 'relative', width: '100%'}}>
    <motion.div
      variants={{
        left: {opacity: 0, x: 500},
        right: {opacity: 0, x: -500},
        center: {opacity: 1, x: 0}
      }}
      initial= {index % 2 === 0? 'left': 'right'}
      animate= {activateAnimation}
      transition={{duration: 0.5}}
    >
        {children}
    </motion.div>
    </div>

}