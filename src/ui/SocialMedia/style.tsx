import styled from 'styled-components'
import { colors } from 'src/styled/mixins';

export const SocialMeidaLinks = styled.div.attrs((props: {theme: string}) => props)`
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