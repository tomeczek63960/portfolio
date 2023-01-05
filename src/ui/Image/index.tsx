import React, { FC } from "react";
import Image from "next/image";
import { StyledImage } from "./style";
import { PropsImage } from "./types";
import { getEnvVars } from "src/helpers/getEnvVars";
const ComponentImage: FC<PropsImage> = ({ url = "", className }) => {
  return (
    <StyledImage>
      <Image
        className={className}
        src={`${getEnvVars().apiUrl}${url}`}
        alt="Picture of the author"
        blurDataURL="data:..."
        placeholder="blur"
        layout="fill"
      />
    </StyledImage>
  );
};

export default ComponentImage;
