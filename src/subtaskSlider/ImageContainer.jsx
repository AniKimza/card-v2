import {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { useAnimation } from 'framer-motion'

const ImageContainer = ({children, width, index}) => {

    const [isHovered, setIsHovered] = useState(null)
    const activateResize = useAnimation()

    useEffect(() => {
        if(isHovered){
            activateResize.start('expand')
        }else{
            activateResize.start('reduce')
        }
    }, [isHovered])

  return (
    <motion.div
    style={{width: width, height: '100%'}}
    variants={{
        expand: {width: '70%', height: '100%'},
        reduce: {height: '80%', width: width}
    }}
    onHoverStart= {() => {
        setIsHovered(index)
    }}
    onHoverEnd={() => {
        setIsHovered(null)
    }}
    animate={activateResize}
    >
        {children}
    </motion.div>
  )
}

export default ImageContainer