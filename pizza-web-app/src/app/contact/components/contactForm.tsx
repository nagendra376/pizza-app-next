"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactSchema, contactFormData, ContactFormData } from "@/lib/validators/contactSchema";

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form ");
      }
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="d-flex justify-content-center align-items-center ga-3 my-5">
      <form className="d-flex flex-column w-75" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Name */}
        <input className="mb-4 " placeholder="Name" {...form.register("name")} />
        {form.formState.errors.name && <p>{form.formState.errors.name.message}</p>}

        {/* Email */}
        <input className="mb-4 " placeholder="Email" {...form.register("email")} />
        {form.formState.errors.email && <p>{form.formState.errors.email.message}</p>}

        {/* Message */}
        <textarea className="mb-4 " placeholder="Message" {...form.register("message")} />
        {form.formState.errors.message && <p>{form.formState.errors.message?.message}</p>}

        <button className="buttons mx-auto" type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Sending..." : "Submit"}
        </button>

        {mutation.isSuccess && <p>Message sent successfully ✅</p>}
        {mutation.isError && <p>Something went wrong ❌</p>}
      </form>
    </div>
  );
}
