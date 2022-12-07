import React from 'react';
import Image from 'next/image';
import {CustomImage} from './style';

interface Props {
  url: string;
  className?: string;
}

const CustomImageComponent: React.FC<Props> = ({url, className}: Props) => {
  return (
    <>
      <CustomImage>
        <Image
          className={className}
          src={`http://localhost:1337${url}`}
          alt="Picture of the author"
          blurDataURL="data:..."
          placeholder="blur"
          layout='fill'
      />
      </CustomImage>
    </>
  );
}

export default CustomImageComponent;
