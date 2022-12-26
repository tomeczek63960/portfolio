export const emailValidation = (email) => {
  if (email === "") return { valid: false, msg: "Wymagane pole" };

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validate = regex.test(email);

  return validate
    ? { valid: true }
    : { valid: false, msg: "Niepoprawny E-mail" };
};
export const nameValidation = (name) => {
  if (!name.length) return { valid: false, msg: "Wymagene pole" };
  // if(name.length < 3) return { valid: false, msg: "Wymagane 3 znaki" };

  const regex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  const validate = regex.test(name);
  return validate
    ? { valid: true }
    : { valid: false, msg: "Niedozwolone znaki specjalne" };
};
export const surnameValidation = (surname) => {
  if (!surname.length) return { valid: false, msg: "Wymagene pole" };
  // if(surname.length < 3) return { valid: false, msg: "Wymagane 3 znaki" }

  const regex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  const validate = regex.test(surname);

  return validate
    ? { valid: true }
    : { valid: false, msg: "Niedozwolone znaki specjalne" };
};
export const phoneValidation = (number) => {
  if (number.length === 0) return { valid: false, msg: "Wymagene pole" };

  const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
  const validate = regex.test(number);

  return validate
    ? { valid: true }
    : { valid: false, msg: "Niedozwolone znaki specjalne" };
};
