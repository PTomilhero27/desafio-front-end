import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "./schema";
import { useRouter } from "next/navigation";

type LoginFormData = z.infer<typeof LoginSchema>;

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    if (data) {
      router.push("/dashboard");
    } else {
      console.error("Erro na validação dos dados do formulário");
    }
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
};
