"use client";

import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";

import ProjectImage from "@/components/ProjectImage";
import { type ImageItemType } from "@/types";

import { Container, Grid, Spinner } from "./styles";

const ProjectsPage: FC = () => {
  const [images, setImages] = useState<ImageItemType[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    setLoadingImages(true);
    fetch("/api/projects-images")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoadingImages(false);
      })
      .catch(() => setLoadingImages(false));
  }, []);

  if (loadingImages) {
    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <Spinner />
      </Box>
    );
  }

  return (
    <Container>
      <Grid>
        {images.map((image, index) => (
          <ProjectImage
            key={image.id}
            image={image}
            wide={(index + 1) % 7 === 0}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
