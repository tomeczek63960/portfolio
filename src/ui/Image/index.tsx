import React, { FC } from "react";
import Image from "next/image";
import { StyledImage } from "./style";
import { ImageProps } from "./types";

const ImageComponent: FC<ImageProps> = ({ url, className }) => {
  return (
    <StyledImage>
      <Image
        className={className}
        src={`http://localhost:1337${url}`}
        alt="Picture of the author"
        blurDataURL="data:..."
        placeholder="blur"
        layout="fill"
      />
    </StyledImage>
  );
};

export default ImageComponent;
