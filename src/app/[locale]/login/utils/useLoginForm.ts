import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LoginSchema } from "./schema";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/toast/use-toast";
import { getCookie } from "cookies-next";

type LoginFormData = z.infer<typeof LoginSchema>;

export const useLoginForm = () => {
  const { toast } = useToast();
  const locale = (getCookie("NEXT_LOCALE") as string) || "pt";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    if (data.username === "blue" && data.password === "blue") {
      toast({
        variant: "success",
        title: "Login Bem-sucedido",
        description: "Você foi autenticado com sucesso. Bem-vindo de volta!",
      });

      router.push(`/${locale}/dashboard`);
    } else {
      toast({
        variant: "error",
        title: "Erro ao Logar",
        description: "Usuário ou senha inválidos. Por favor, tente novamente!",
      });
    }
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
};
