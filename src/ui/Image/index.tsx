import React from 'react';
import Image from 'next/image';
import {StyledImage} from './style';

interface Props {
  url: string;
  className?: string;
}

const ImageComponent: React.FC<Props> = ({url, className}: Props) => {
  return (
    <StyledImage>
      <Image
        className={className}
        src={`http://localhost:1337${url}`}
        alt="Picture of the author"
        blurDataURL="data:..."
        placeholder="blur"
        layout='fill'
    />
    </StyledImage>
  );
}

export default ImageComponent;
