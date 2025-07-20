import { emailRegex } from "./regex";

export function isValidEmail(email: string) {
    return emailRegex.test(email);
  }