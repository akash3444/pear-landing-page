"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { constructMetadata } from "@/lib/utils";
import {
  UpdatePasswordFormData,
  updatePasswordSchema,
} from "@/utils/form-schema";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "../ui/use-toast";

export const metadata: Metadata = constructMetadata({
  title: "Update password",
  description: "Update your account password",
  canonical: "/update-password",
});

const UpdatePasswordForm = () => {
  const supabase = createClient();
  const router = useRouter();

  const form = useForm<UpdatePasswordFormData>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const {
    formState: { isSubmitting },
  } = form;

  const handleUpdatePassword: SubmitHandler<UpdatePasswordFormData> = async ({
    newPassword,
  }) => {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) {
      toast({
        variant: "destructive",
        title: error.message,
      });
      return;
    }

    toast({
      title: "Your password has been successfully updated.",
    });
    router.replace("/settings");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleUpdatePassword)}
        className="mt-12 space-y-6 px-6 md:px-0"
      >
        <FormField
          name="newPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="newPassword">New Password</FormLabel>
              <FormControl>
                <Input id="newPassword" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="confirmNewPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="confirmNewPassword">
                Confirm New Password
              </FormLabel>
              <FormControl>
                <Input id="confirmNewPassword" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="mt-6 w-full rounded-md bg-primary-700 text-white-50 hover:bg-primary-800 hover:shadow-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating password..." : "Update Password"}
        </Button>
      </form>
    </Form>
  );
};

export default UpdatePasswordForm;
