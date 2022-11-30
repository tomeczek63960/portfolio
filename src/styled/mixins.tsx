import React from 'react';
import styled, { css } from 'styled-components'

export const responsive = {
  tabletP: (...props: (TemplateStringsArray|string)[]) => css`
    @media (min-width: 768px) {
      ${css(...props)};
    }
  `,
  tabletL: (...props: (TemplateStringsArray|string)[]) => css`
    @media (min-width: 1024px) {
      ${css(...props)};
    }
  `,
  desktop: (...props: (TemplateStringsArray|string)[]) => css`
    @media (min-width: 1366px) {
      ${css(...props)};
    }
  `
};

export const colors = {
  black: '#000',
  white: '#333',
  red: 'red'
};