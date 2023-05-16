import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import ImageContainer from "./ImageContainer";
import { useAnimation,motion } from "framer-motion";
import { Button } from "@mui/material";

const SubtaskSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(true);

  const resizeCard = useAnimation();
  

  useEffect(() => {
    if (isOpen) {
      resizeCard.start("open");
    } else {
      resizeCard.start("round");
      resizeCard.start("closed");
    }
  }, [isOpen]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // TODO this two arrays will be passed as props but we leave here for now

  const subImages = [
    "https://wallpapercave.com/wp/wp4471392.jpg",
    "https://wallpaperaccess.com/full/7228853.jpg",
    "https://wallpapercave.com/wp/wp4471362.jpg",
    "https://wallpaperaccess.com/full/1138975.jpg",
    "https://wallpaper-house.com/data/out/8/wallpaper2you_248125.jpg",
  ];

  const subTasks = [
    "Hello there this is your first subtask",
    "Hello there this is your second subtask",
    "Hello there this is your third subtask",
    "Hello there this is your fourth subtask",
    "Hello there this is your fifth subtask",
  ];

  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      {/* <Stack direction="row"  width="50%" height="50%" alignItems="flex-end"> */}
      <motion.div
            layout
            style={{ display: 'flex', alignItems:"flex-end"}}
            variants={{
              open: {
                height: "50%",
                width: "50%",
                scale: 1,
                borderRadius: 50,
                position: "relative",
              },
              closed: {
                height: "50px",
                width: "50px",
                scale: 0.6,
                borderRadius: '50%'
              }
            }}
            initial = 'open'
            transition={{
              duration: 0.7,
            }}
            animate={resizeCard}
          >
        {subImages.map((item, index) => (
          <ImageContainer
            key={item}
            width={`${100 / subImages.length}%`}
            index={index + 1}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            sx={{boxShadow: '50% 0 0 0 rgba(0, 0, 0, 0.5)'}}
          >
            <img
              src={item}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: 'drop-shadow(1rem 1rem 1rem rgba(0, 0, 0, 1))'
              }}
            />
          </ImageContainer>
        ))}
        </motion.div>
      {/* </Stack> */}
      
            <Button
            sx={{position: 'fixed',
            bottom: '20%'
        }}
              variant="contained"
              size="large"
              color="primary"
              onClick={() => setIsOpen(!isOpen)}
            >
              Open Card
            </Button>
    </Stack>
  );
};

export default SubtaskSlider;
