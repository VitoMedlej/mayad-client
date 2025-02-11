"use client"
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/navigation";
import { client } from "@/app/page";

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);
const getSanityFileUrl = (ref: string) => {
    const [fileId, extension] = ref.replace("file-", "").split("-");
    return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${fileId}.${extension}`;
  };
interface Project {
  _id: string;
  title: string;
  description: string;
  type: string;
  images?: { asset: { _ref: string } }[];
  video?: { asset: { _ref: string } };
}

const Projects = ({data}:{data:any[]}) => {
  const [projects, setProjects] = useState<Project[]>(data);
  const router = useRouter();

  useEffect(() => {
    
  if (!projects && data) {
    setProjects(data)
  }
    
  }, [data])
  

  return (
    <Container
      id="serv"
      sx={{ maxWidth: "lg" }}
      className="flex wrap row justify-between"
    >
      {projects && projects?.map((project, index) => (
        <Box
          key={project._id}
          className="flex row wrap"
          sx={{
            borderBottom: "1px solid white",
            width: { xs: "98%" },
            maxWidth: "lg",
            justifyContent: "space-between",
            my: 5.5,
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "48%" } }}>
            <Typography className="color">.0{index + 1}</Typography>
            <Typography
              sx={{
                maxWidth: "400px",
                fontSize: { xs: "1.5em", sm: "2em" },
                fontWeight: 500,
              }}
            >
              {project.title}
            </Typography>
            <Typography
              sx={{
                color: "#4d555e",
                fontSize: { xs: ".88em", sm: "1em" },
                pb: 0.65,
                maxWidth: "350px",
              }}
            >
              {project.description}
            </Typography>
          </Box>
          <Box
            sx={{
              height: { xs: "250px", sm: "300px" },
              mt: 0.5,
              borderRadius: "6px",
              width: { xs: "100%", sm: "48%" },
              position: "relative",
            }}
          >
            {project.video ? (
  <video
    style={{ borderRadius: "6px", width: "100%", height: "100%" }}
    controls
  >
    <source src={getSanityFileUrl(project.video.asset._ref)} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
) : project.images && project.images.length > 0 ? (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "6px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={urlFor(project.images[0].asset._ref).url()}
                  alt={project.title}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { xs: "1.5em", sm: "2em" },
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "6px",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#757575",
                    fontSize: { xs: "1.5em", sm: "2em" },
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  No media available
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Projects;