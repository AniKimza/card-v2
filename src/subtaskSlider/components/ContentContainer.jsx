import React from 'react'
import { motion } from "framer-motion";

const ContentContainer = ({children}) => {
  return (
    <motion.div
          initial={{ opacity: 0, x: -2 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2,
            ease: 'linear',
            duration: 0.3
          }}
        >
            {children}
        </motion.div>
  )
}

export default ContentContainer