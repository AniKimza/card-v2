import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export const SearchBar = ({ handleSearch, value }) => {

  const activateHoverState = useAnimation();

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "35%",
        position: "absolute",
        bottom: "10%",
        border: "1px solid #90caf9",
        filter: "drop-shadow(0 1rem 0.5rem rgba(0, 0, 0, 1))"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 , fontFamily: "Bruno Ace SC", fontSize: 18}}
        onChange={handleSearch}
        placeholder="Enter your task here"
        value={value}
      />
          <Button
            size="large"
            disabled={value === ""}
            sx={{
              backgroundColor: value === "" ? "black" : null,
              m: '10px',
              fontFamily: "Bruno Ace SC"
            }}
            onMouseEnter={() => activateHoverState.start("hovered")}
            onMouseLeave={() => activateHoverState.start("normal")}
          >
            <motion.div
              style={{
                width: "100%",
                borderRight: "3px solid #90caf9",
                borderLeft: "3px solid #90caf9",
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
              variants={{
                normal: {
                  height: "30%",
                },
                hovered: {
                  height: "100%",
                },
              }}
              initial="normal"
              animate={activateHoverState}
              transition={{
                ease: "linear",
                duration: 0.5,
              }}
            />
            <motion.div
              style={{
                width: "100%",
                borderRight: "3px solid #90caf9",
                borderLeft: "3px solid #90caf9",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              variants={{
                normal: {
                  height: "30%",
                },
                hovered: {
                  height: "100%",
                },
              }}
              initial="normal"
              animate={activateHoverState}
              transition={{
                ease: "linear",
                duration: 0.5,
              }}
            />
            <motion.div
              style={{
                height: "100%",
                borderTop: "3px solid #90caf9",
                borderBottom: "3px solid #90caf9",
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
              variants={{
                normal: {
                  width: "15%",
                },
                hovered: {
                  width: "100%",
                },
              }}
              initial="normal"
              animate={activateHoverState}
              transition={{
                ease: "linear",
                duration: 0.5,
              }}
            />
            <motion.div
              style={{
                height: "100%",
                borderTop: "3px solid #90caf9",
                borderBottom: "3px solid #90caf9",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
              variants={{
                normal: {
                  width: "15%",
                },
                hovered: {
                  width: "100%",
                },
              }}
              initial="normal"
              animate={activateHoverState}
              transition={{
                ease: "linear",
                duration: 0.5,
              }}
            />
            Generate AI
          </Button>
    </Paper>
  );
};
