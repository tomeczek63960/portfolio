import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { StyledLogo } from "./style";
import { useLogoAnimation } from "src/hooks/useLogoAnimation";
import { useIntl } from "react-intl";

const ComponentLogo: FC = () => {
  const { locale, asPath } = useRouter();
  const [refTLetter, refKLetter] = useLogoAnimation();
  const intl = useIntl();

  return (
    <Link href={intl.messages["nav.home.link"].toString()} locale={locale}>
      <StyledLogo
        className={
          asPath === intl.messages["nav.home.link"].toString() ? "active" : ""
        }
      >
        <svg
          viewBox="0 0 61.3 71.4"
          xmlns="http://www.w3.org/2000/svg"
          ref={refTLetter}
        >
          <g
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            stroke="#fff"
            strokeWidth="0.25mm"
            fill="none"
          >
            <path
              d="M 47.3 71.4 L 14 71.4 L 14 66.5 L 17.5 66.5 A 9.775 9.775 0 0 0 19.551 66.295 A 7.076 7.076 0 0 0 21.9 65.35 Q 23.429 64.373 23.659 61.123 A 17.35 17.35 0 0 0 23.7 59.9 L 23.7 5.7 L 15.1 5.7 A 14.411 14.411 0 0 0 12.967 5.846 Q 10.252 6.254 9 7.8 A 9.133 9.133 0 0 0 7.44 10.714 A 12.845 12.845 0 0 0 6.9 13.2 L 6.2 18.8 L 0 18.8 L 0.5 0 L 60.8 0 L 61.3 18.8 L 55.1 18.8 L 54.5 13.2 A 12.848 12.848 0 0 0 53.96 10.717 Q 53.409 9.047 52.4 7.8 Q 50.762 5.776 46.524 5.703 A 18.64 18.64 0 0 0 46.2 5.7 L 37.6 5.7 L 37.6 59.7 A 17.478 17.478 0 0 0 37.686 61.508 Q 37.879 63.352 38.503 64.394 A 2.836 2.836 0 0 0 39.4 65.35 A 7.13 7.13 0 0 0 41.891 66.325 A 9.902 9.902 0 0 0 43.8 66.5 L 47.3 66.5 L 47.3 71.4 Z"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
        <svg
          viewBox="0 0 69.6 71.4"
          xmlns="http://www.w3.org/2000/svg"
          ref={refKLetter}
        >
          <g
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            stroke="#fff"
            strokeWidth="0.25mm"
            fill="none"
          >
            <path
              d="M 32.7 71.4 L 0 71.4 L 0 66.5 L 3.3 66.5 Q 5.8 66.5 7.6 65.45 A 2.844 2.844 0 0 0 8.679 64.254 Q 9.231 63.186 9.36 61.379 A 16.52 16.52 0 0 0 9.4 60.2 L 9.4 11.3 Q 9.4 7.1 7.6 6 A 7.389 7.389 0 0 0 4.954 5.033 A 9.891 9.891 0 0 0 3.3 4.9 L 0 4.9 L 0 0 L 32.7 0 L 32.7 4.9 L 29.5 4.9 A 9.775 9.775 0 0 0 27.449 5.105 A 7.076 7.076 0 0 0 25.1 6.05 A 2.973 2.973 0 0 0 24.075 7.236 Q 23.512 8.334 23.358 10.193 A 18.312 18.312 0 0 0 23.3 11.7 L 23.3 36.6 L 40.5 17.4 A 61.412 61.412 0 0 0 42.146 15.53 Q 44.052 13.267 44.95 11.65 Q 45.942 9.864 46.147 8.299 A 6.158 6.158 0 0 0 46.2 7.5 A 3.139 3.139 0 0 0 46.101 6.683 A 1.945 1.945 0 0 0 44.95 5.35 A 4.711 4.711 0 0 0 44.116 5.084 Q 43.221 4.878 41.876 4.821 A 25.729 25.729 0 0 0 40.8 4.8 L 40.8 0 L 66.2 0 L 66.2 4.8 A 11.307 11.307 0 0 0 59.88 6.748 A 14.272 14.272 0 0 0 59.1 7.3 A 40.443 40.443 0 0 0 56.155 9.775 Q 54.708 11.106 53.207 12.705 A 70.458 70.458 0 0 0 52.2 13.8 L 38.5 28.9 L 58 58.4 A 39.043 39.043 0 0 0 59.783 60.901 Q 61.644 63.291 63.374 64.559 A 10.909 10.909 0 0 0 63.5 64.65 Q 66.1 66.5 69.2 66.5 L 69.6 66.5 L 69.6 71.4 L 65.6 71.4 A 100.145 100.145 0 0 1 62.049 71.341 Q 58.88 71.228 56.55 70.9 A 27.393 27.393 0 0 1 54.094 70.446 Q 52.919 70.169 51.934 69.804 A 12.927 12.927 0 0 1 50.75 69.3 A 13.035 13.035 0 0 1 47.987 67.504 A 11.631 11.631 0 0 1 46.95 66.5 Q 45.618 65.039 44.249 62.987 A 43.066 43.066 0 0 1 43.8 62.3 L 29.1 38.7 L 23.3 43.8 L 23.3 59.7 A 17.478 17.478 0 0 0 23.386 61.508 Q 23.579 63.352 24.203 64.394 A 2.836 2.836 0 0 0 25.1 65.35 A 7.13 7.13 0 0 0 27.591 66.325 A 9.902 9.902 0 0 0 29.5 66.5 L 32.7 66.5 L 32.7 71.4 Z"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </StyledLogo>
    </Link>
  );
};

export default ComponentLogo;
