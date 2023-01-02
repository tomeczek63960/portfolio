import { useDispatch } from "react-redux";
import { removeError, setError } from "src/store/errors";

export const useErrorHandler = (): [Function] => {
  const dispatch = useDispatch();

  const setErrorAction = (
    message: string = "Coś poszło nie tak, spróbuj odświeżyć stronę"
  ): void => {
    const id = Math.random() * 10000;
    dispatch(
      setError({
        error: message,
        id,
      })
    );
    setTimeout(() => {
      dispatch(
        removeError({
          id,
        })
      );
    }, 5000);
  };

  return [setErrorAction];
};
