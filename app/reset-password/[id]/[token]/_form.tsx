"use client";
import { Button } from "@/components/ui/button";
import { domain } from "@/environment/client";
import { useState } from "react";

export default function ForgotPassword({
  id,
  token,
}: {
  id: string;
  token: string;
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    console.log("happening");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${domain}/auth/reset_password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          token,
          password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.message);
        return;
      }
      // redirect to login
      alert("Password successfully reset!");
    } catch (err: any) {}

    // Reset form
    setPassword("");
    setConfirmPassword("");
    setError("");
    setLoading(false);
  };
  console.log({ error });

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-24 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Reset your password
        </h2>
      </div>

      <div className="mt-6 px-6 py-12 shadow rounded-lg md:px-12 md:mx-auto w-full md:max-w-sm bg-gray-950">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-white"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                className="block w-full rounded-md border-0 bg-white/5 p-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 bg-white/5 p-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </div>
          </div>

          <div>
            <Button onClick={handleSubmit} isLoading={loading}>
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
