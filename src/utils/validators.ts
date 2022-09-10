import { sanitizeValue } from "./index";

export const required = (value: string): boolean | string =>
  !!value || "Este campo é obrigatório.";

export const email = (email: string): boolean | string => {
  const regex = new RegExp(
    "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"
  );
  return regex.test(email) ? true : "Digite um email válido.";
};

export const cpf = (cpf: string): boolean | string => {
  const sanitizedCpf = sanitizeValue(cpf);
  const errorStr = "Digite um cpf válido.";

  let Soma;
  let Resto;
  Soma = 0;
  if (
    sanitizedCpf === "00000000000" ||
    sanitizedCpf === "11111111111" ||
    sanitizedCpf === "22222222222" ||
    sanitizedCpf === "33333333333" ||
    sanitizedCpf === "44444444444" ||
    sanitizedCpf === "55555555555" ||
    sanitizedCpf === "66666666666" ||
    sanitizedCpf === "77777777777" ||
    sanitizedCpf === "88888888888" ||
    sanitizedCpf === "99999999999"
  )
    return errorStr;

  for (let i = 1; i <= 9; i++)
    Soma = Soma + parseInt(sanitizedCpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(sanitizedCpf.substring(9, 10))) return errorStr;

  Soma = 0;
  for (let i = 1; i <= 10; i++)
    Soma = Soma + parseInt(sanitizedCpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(sanitizedCpf.substring(10, 11))) return errorStr;
  return true;
};
