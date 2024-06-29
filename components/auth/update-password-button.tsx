"use client";

import { resetPassword } from "@/app/(auth)/actions";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import { ToastAction } from "../ui/toast";
import { toast } from "../ui/use-toast";
import { useFormStatus } from "react-dom";

const UpdatePasswordButton = () => {
  const handleUpdatePassword = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user?.email) {
      redirect("/signin");
    }

    const formData = new FormData();
    formData.append("email", data.user.email);
    const { error: resetPasswordError } = await resetPassword(formData);

    if (resetPasswordError) {
      toast({
        variant: "destructive",
        title: resetPasswordError,
        action: (
          <ToastAction altText="Try again" onClick={handleUpdatePassword}>
            Try again
          </ToastAction>
        ),
      });
      return;
    }

    toast({
      title: "Check your email for a password update link.",
      duration: 10000,
    });
  };

  return (
    <form action={handleUpdatePassword}>
      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button size="sm" className="mt-4" disabled={pending}>
      Update Password
    </Button>
  );
};

export default UpdatePasswordButton;
