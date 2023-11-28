import { domain } from "@/environment/server";
import { MdError } from "react-icons/md";
import ForgotPasswordForm from "./_form";

const verify_reset_token = async (id: string, token: string) => {
  try {
    const res = await fetch(`${domain}/auth/verify_reset_token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({
        id,
        token,
      }),
    });
    const data = await res.json();
    return data;
  } catch (err: any) {
    return {
      error: true,
      message:
        "Error verifying reset token. This link may have expired. Please try again.",
    };
  }
};

export default async function RootLayout({
  params,
}: {
  params: { id: string; token: string };
}) {
  console.log({ params });
  const data = await verify_reset_token(params.id, params.token);
  if (data.error) {
    return (
      <main className="h-screen w-full flex flex-col justify-center items-center">
        <MdError className="text-yellow-400" size={128} />
        <h1 className="font-bold my-4">
          {data.error
            ? "Error verifying email"
            : "Successfully verified email!"}
        </h1>
        <p className="text-center px-16">{data.message}</p>
      </main>
    );
  }

  return <ForgotPasswordForm params={params} />;
}
