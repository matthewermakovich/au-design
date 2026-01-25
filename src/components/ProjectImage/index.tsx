"use client";

import { FC, useState } from "react";

import { useVisible } from "@/hooks";

import { ProjectImageProps } from "./types";

import { LoaderOverlay, Spinner, Image, GridItem } from "./styles";

const ProjectImage: FC<ProjectImageProps> = ({ image, wide }) => {
  const { ref, visible } = useVisible<HTMLImageElement>(1);
  const [loaded, setLoaded] = useState(false);

  return (
    <GridItem $wide={wide}>
      {!loaded && (
        <LoaderOverlay>
          <Spinner />
        </LoaderOverlay>
      )}

      <Image
        ref={ref}
        className={visible ? "visible" : ""}
        src={image.url}
        alt=""
        fill
        unoptimized
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </GridItem>
  );
};

export default ProjectImage;
