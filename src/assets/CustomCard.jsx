import { animate, motion } from "framer-motion";
import { Stack, Card, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useAnimation } from "framer-motion";

export const CustomCard = () => {
  const [title, setTitle] = useState("");
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


  return (
    <>
        <Stack
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          overflow={"hidden"}
        >
          <motion.div
            layout
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
              },
              round : {
                borderRadius: '50%'
              }
            }}
            initial = 'open'
            transition={{
              duration: 0.7,
            }}
            animate={resizeCard}
          >
            <Card
              sx={{ borderRadius: 7, padding: 4, height: "100%", backgroundColor: 'lightblue' }}
              elevation={5}
            >
            </Card>
          </motion.div>
          <SearchBar
            handle={handleTitle}
            title={title}
            open={isOpen}
            setOpen={setIsOpen}
          />
          {!isOpen && (
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
          )}
        </Stack>
    </>
  );
};
