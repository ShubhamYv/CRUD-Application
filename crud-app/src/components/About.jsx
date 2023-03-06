import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Box
        component="img"
        sx={{
          height: "200px",
          borderRadius: "50%",
          display: "flex",
          marginLeft: ["100px", "44%"],
          marginTop: ["20px", "40px"],
        }}
        alt="The house from the offer."
        src="https://avatars.githubusercontent.com/u/75082349?v=4"
      />
      <h2 align="center" fontFamily="sans-serif">
        Shubham Kumar Yadav
      </h2>

      <Box
        width={[350, 900]}
        height={[130, 110]}
        margin="35px"
        bgcolor={"grey"}
        marginLeft={["20px", "300px"]}
      >
        <Typography
          variant="p"
          color={"#000000"}
          display="flex"
          fontSize={["25px", "35px"]}
          padding={["10px", "15px"]}
          fontFamily="sans-serif"
        >
          This website allows user to add the data, read the data, update the
          data and delete the data from the database.
        </Typography>
      </Box>
    </>
  );
};

export default About;
