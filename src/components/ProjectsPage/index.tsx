"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

import { type ImageItemType } from "./types";

import { Container, Grid, GridItem, LoaderOverlay, Spinner } from "./styles";

const ProjectsPage: FC = () => {
  const [images, setImages] = useState<ImageItemType[]>([]);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
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

  const handleLoad = (id: string) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  };

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
          <GridItem key={image.id} $wide={(index + 1) % 7 === 0}>
            {!loaded[image.id] && (
              <LoaderOverlay>
                <Spinner />
              </LoaderOverlay>
            )}
            <Image
              src={image.url}
              alt=""
              fill
              unoptimized
              loading="lazy"
              onLoad={() => handleLoad(image.id)}
            />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsPage;
