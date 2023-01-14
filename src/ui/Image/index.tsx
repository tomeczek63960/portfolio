import React, { FC } from "react";
import Image from "next/image";
import { StyledImage } from "./style";
import { PropsImage } from "./types";
import { getEnvVars } from "src/helpers/getEnvVars";
import { isTruthy } from "src/helpers/checkFalsyType";
const ComponentImage: FC<PropsImage> = ({ url = "", className, sizes }) => {
  return (
    <StyledImage>
      <Image
        className={className}
        src={`${getEnvVars().apiUrl}${url}`}
        sizes={isTruthy(sizes) ? sizes : "100vw"}
        alt="Picture of the author"
        blurDataURL="data:..."
        placeholder="blur"
        layout="fill"
      />
    </StyledImage>
  );
};

export default ComponentImage;
