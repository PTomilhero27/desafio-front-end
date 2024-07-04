import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, { message: "Usuário é obrigatório" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
});
