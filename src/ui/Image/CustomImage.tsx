import React from 'react';
import styled from 'styled-components'
import Image from 'next/image'

const CustomImage = styled.div`
  width: 100%;
  & > span {
    position: unset !important;
  }
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: 0.3s ease-in-out;
    object-fit: cover;
    object-position: left top;
    background-position: top;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

interface Props {
  url: string;
  className?: string;
}

const CustomImageComponent = ({url, className}: Props) => {
  return (
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
  );
}

export default CustomImageComponent;
