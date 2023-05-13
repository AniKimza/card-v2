import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ContentContainer from "./components/ContentContainer";
import AnimatedLines from "./components/AnimatedLines";
import './css/SubTaskContent.css'

const SubTaskContent = ({ part, content }) => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        pr: 3,
        width: "100%",
        height: "fit-content",
        background: "linear-gradient(to top, black, rgba(242, 242, 242, 0))",
      }}
    >
      <Stack direction="row" alignItems="center" width="100%" spacing={2}>
        <AnimatedLines length='10%' thickness='5px'/>
       <ContentContainer>
          <Typography
            fontFamily={"Bruno Ace SC"}
            width={"fit-content"}
            fontSize={40}
          >
            PART {part}
          </Typography>
        </ContentContainer>
      </Stack>
        <AnimatedLines length='45%' thickness='2px'/>
     <ContentContainer>
      <Typography
        fontFamily={"Bruno Ace SC"}
        width={"fit-content"}
        fontSize={20}
        margin={3}
        sx={{ inlineSize: "100%", overflowWrap: "break-word" }}
      >
        {content}
      </Typography>
      </ContentContainer>
    </Box>
  );
};

export default SubTaskContent;
