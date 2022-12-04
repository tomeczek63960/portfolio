import React from 'react';
import Linkedin from '../../../public/svg/linkedin.svg';
import Github from '../../../public/svg/github.svg';
import {SocialMeidaLinks} from './style';

interface Props {
  theme?: string;
};

const SocialMedia = ({theme = 'dark'}: Props, ref: any) => <SocialMeidaLinks theme={theme} ref={ref}>
  <a href="https://github.com/tomeczek63960" target="_blank"><Linkedin /></a>
  <a href="https://github.com/tomeczek63960" target="_blank"><Github /></a>
</SocialMeidaLinks>

export default React.forwardRef(SocialMedia);
