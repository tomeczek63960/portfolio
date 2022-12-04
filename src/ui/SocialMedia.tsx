import React from 'react';
import styled from 'styled-components'
import Linkedin from '../../public/svg/linkedin.svg';
import Github from '../../public/svg/github.svg';
import { colors } from 'src/styled/mixins';

const SocialMeidaLinks = styled.div.attrs((props: {theme: string}) => props)`
  margin-bottom: 20px;
  display: flex;
  a {
    display: block;
    margin-right: 20px;
    ${({ theme }) => theme !== 'dark' && "opacity: 0;transform: translateX(-40%);"};
    &:last-child {
      margin-right: 0;
    }
    svg {
      width: 30px;
      height: 30px;
      path {
        transition: 0.3s;
        fill: ${ props => props.theme === 'dark' ? colors.dark : colors.white }
      }
    }
    &:hover svg path {
      fill: ${colors.purpleSecondary};
    }
  }
`;

interface Props {
  theme?: string;
};

const SocialMedia = ({theme = 'dark'}: Props, ref: any) => <SocialMeidaLinks theme={theme} ref={ref}>
  <a href="https://github.com/tomeczek63960" target="_blank"><Linkedin /></a>
  <a href="https://github.com/tomeczek63960" target="_blank"><Github /></a>
</SocialMeidaLinks>

export default React.forwardRef(SocialMedia);
