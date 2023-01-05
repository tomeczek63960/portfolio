import { isTruthy } from "./checkFalsyType";
interface envObject {
  apiUrl: string;
}

export const getEnvVars = (): envObject => {
  const apiUrl = isTruthy(process.env.NEXT_PUBLIC_API_URL)
    ? process.env.NEXT_PUBLIC_API_URL
    : "";
  return {
    apiUrl,
  };
};
