"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box, User, Lock } from "lucide-react";
import { useLoginForm } from "../utils/useLoginForm";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const Login = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <BackgroundBeams />
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg border bg-card p-6 shadow-lg sm:p-8">
        <div className="flex flex-col items-center space-y-2">
          <Box width={48} height={48} className="text-primary" />
          <h1 className="text-2xl font-bold">Bem-vindo ao Blue</h1>
        </div>
        <Form className="grid gap-6">
          <FormField>
            <FormLabel htmlFor="username">Usuário</FormLabel>
            <FormControl>
              <Input
                id="username"
                placeholder="Digite seu usuário"
                className="pl-10"
                error={!!errors.username}
                icon={User}
                {...register("username")}
              />
            </FormControl>
            {errors.username && (
              <FormMessage>{errors.username.message}</FormMessage>
            )}
          </FormField>

          <FormField>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <FormControl>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                className="pl-10"
                error={!!errors.password}
                icon={Lock}
                {...register("password")}
              />
            </FormControl>
            {errors.password && (
              <FormMessage>{errors.password.message}</FormMessage>
            )}
          </FormField>
          <Button
            variant="dark"
            onClick={handleSubmit(onSubmit)}
            className="relative w-full hover:bg-primary/90"
          >
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
