type Falsy = 0 | "" | false | null | undefined;

export const isTruthy = <T>(x: T): x is Exclude<T, Falsy> => {
  return !!(x as boolean);
};

export const isFalsy = <T>(x: T): x is T & Falsy => {
  return !(x as boolean);
};
