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
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation("common");
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <BackgroundBeams />
      <div className="mx-auto z-10 w-full max-w-md space-y-6 rounded-lg border bg-card p-6 shadow-lg sm:p-8">
        <div className="flex flex-col items-center space-y-2">
          <Box width={48} height={48} className="text-primary" />
          <h1 className="text-2xl font-bold">{t("login.title")}</h1>
        </div>
        <Form className="grid gap-6">
          <FormField>
            <FormLabel htmlFor="username">{t("login.username")}</FormLabel>
            <FormControl>
              <Input
                id="username"
                placeholder={t("login.username_placeholder")}
                className="pl-10 text-black"
                error={!!errors.username}
                icon={User}
                classIcon="text-black"
                {...register("username")}
              />
            </FormControl>
            {errors.username && (
              <FormMessage>{t("login.username_required")}</FormMessage>
            )}
          </FormField>

          <FormField>
            <FormLabel htmlFor="password">{t("login.password")}</FormLabel>
            <FormControl>
              <Input
                id="password"
                type="password"
                placeholder={t("login.password_placeholder")}
                className="pl-10 text-black"
                error={!!errors.password}
                icon={Lock}
                classIcon="text-black"
                {...register("password")}
              />
            </FormControl>
            {errors.password && (
              <FormMessage>{t("login.password_required")}</FormMessage>
            )}
          </FormField>
          <Button
            variant="dark"
            onClick={handleSubmit(onSubmit)}
            className="relative w-full hover:bg-primary/90"
          >
            {t("login.login_button")}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
