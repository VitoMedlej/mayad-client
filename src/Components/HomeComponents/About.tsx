"use client";

import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 4,
        maxWidth: "lg",
        my: {xs:16,sm:16},
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
          borderRadius: "12px",
          overflow: "hidden",
          width:{xs:'100%',sm:'300px'},
          height: { xs: "200px", sm: "300px", md: "400px" },
        }}
      >
        <img
          src="https://kurve.me/wp-content/uploads/2024/10/kan-300x300.png"
          alt="About"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: "0.85em",
            fontWeight: "700",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "2px",
            mb: 1,
          }}
        >
          ABOUT
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1.5em", sm: "1.8em", md: "2.2em" },
            fontWeight: "bold",
            color:'white',
            textTransform: "uppercase",
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Lebanese 3D Motion Designer Portfolio
        </Typography>
        <Typography
          sx={{
            color: "#ccc",
            fontSize: { xs: "0.9em", sm: "1em", md: "1.1em" },
            lineHeight: 1.5,
          }}
        >
          As a passionate 3D motion designer based in Lebanon, I bring life to
          concepts through stunning visuals and motion graphics. With expertise
          in animation, CGI, and creative storytelling, I have worked on various
          projects ranging from corporate branding to artistic expression. My
          portfolio showcases the unique blend of creativity, technical skill, and
          dedication that I bring to every project.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
