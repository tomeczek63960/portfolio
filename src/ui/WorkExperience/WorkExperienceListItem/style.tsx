import styled from 'styled-components'
import { colors } from 'src/styled/mixins';

export const StyledListItem = styled.div`
  position: relative;
  padding: 0 20px 20px;
`;
export const StyledListItemContent = styled.div`
  padding: 20px;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: 0px 16px 15px -10px ${colors.shadowColor};
  position: relative;
  transform: translateY(-20%);
  opacity: 0;
  h4 {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    margin-bottom:5px;
    color: ${colors.purple};
    &::selection {
      background-color: ${colors.blue};
    }
  }
  p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #2B2862;
  }
`;
export const StyledListItemLine = styled.div.attrs((props: {order?: string}) => props)`
  width: 3px;
  /* height: ${({ order }) => order === 'first' ? 'calc(100% - 30px)' : '100%'}; */
  height: 0;
  position: absolute;
  top: ${({ order }) => order === 'first' ? '30px' : '0'};
  left: 0;
  background: ${colors.blue};
  
  .dot {
    width: 14px;
    height: 14px;
    background: ${colors.blue};
    border-radius: 7px;
    position: absolute;
    top: ${({ order }) => order === 'first' ? 'calc(50% - 20px)' : '50%'};
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  svg {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -60%);
    width: auto;
    height: 25px;
    opacity: 0;
  }
`;
