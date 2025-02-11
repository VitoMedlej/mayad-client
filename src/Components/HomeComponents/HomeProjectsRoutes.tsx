"use client";

import { Box, Container, Typography } from "@mui/material";

const endpoints = [
  { title: "Work", type: "ALL PROJECTS", img: "https://kurve.me/wp-content/uploads/2024/09/thumb-14-1024x576.jpg" },
  { title: "CGI", type: "CGI", img: "https://kurve.me/wp-content/uploads/2024/09/thumb-4-1024x576.jpg" },
  { title: "Animations", type: "ANIMATION", img: "https://kurve.me/wp-content/uploads/2024/09/thumb-15-1024x576.jpg" },
];

const Endpoints = () => {
  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 4,
        maxWidth: "lg",
        my: 8,
      }}
    >
      {endpoints.map((endpoint) => (
        <Box
          key={endpoint.title}
          sx={{
            position: "relative",
            borderRadius: "12px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          <img
            src={endpoint.img}
            alt={endpoint.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              background: "rgba(0,0,0,0.6)",
              padding: "6px 12px",
              fontSize: "0.8em",
              fontWeight: "bold",
              color: "white",
              textTransform: "uppercase",
              borderRadius: "0 0 6px 0",
            }}
          >
            {endpoint.type}
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              background: "rgba(0,0,0,0.5)",
              padding: "10px",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "1.5em",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {endpoint.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Endpoints;