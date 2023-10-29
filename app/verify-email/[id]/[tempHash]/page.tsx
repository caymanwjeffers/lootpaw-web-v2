import { MdMarkEmailRead } from "react-icons/md";
async function VerifyEmail(id: string, tempHash: string) {
  const res = await fetch("https://lootpaw.fly.dev/auth/verify_email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
    body: JSON.stringify({
      id,
      tempHash,
    }),
  });
  const data = await res.json();
  return data;
}
export default async function VerifyEmailPage({
  params,
}: {
  params: {
    id: string;
    tempHash: string;
  };
}) {
  const data = await VerifyEmail(params.id, params.tempHash);
  console.log({ data });
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <MdMarkEmailRead className="text-yellow-400" size={128} />
      <h1 className="font-bold my-4">
        {data.error ? "Error verifying email" : "Successfully verified email!"}
      </h1>
      <p className="text-center px-16">
        Go back to the Lootpaw App and press {`"Continue"`} to complete your
        registration.
      </p>
    </main>
  );
}
