import UpdatePasswordForm from "@/components/auth/update-password-form";
import { constructMetadata } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FC } from "react";

export const metadata: Metadata = constructMetadata({
  title: "Update password",
  description: "Update your account password",
  canonical: "/update-password",
});

interface UpdatePasswordPageProps {
  searchParams: {
    code?: string;
  };
}

const UpdatePasswordPage: FC<UpdatePasswordPageProps> = async ({
  searchParams: { code },
}) => {
  const supabase = createClient();

  if (!code) redirect("/");

  try {
    const { error } = await supabase.auth.exchangeCodeForSession(
      code as string,
    );
    console.log("ERROR :", error);
  } catch (error) {
    console.log("error :", JSON.stringify(error));
  }

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }

  return (
    <div className="mx-auto max-w-md pt-44 md:pt-32">
      <h1 className="text-center text-3xl font-semibold md:text-5xl md:font-normal">
        Update Password
      </h1>
      <UpdatePasswordForm />
    </div>
  );
};

export default UpdatePasswordPage;
