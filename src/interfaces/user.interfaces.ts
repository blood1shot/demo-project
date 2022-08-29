export interface payloadInterface {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
}

export type loginCredentialsInterface = Omit<
  payloadInterface,
  "firstname" | "lastname"
>;
