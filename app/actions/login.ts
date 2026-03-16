'use server'

import { z } from "zod"
import { signIn } from "@/auth"

const schema = z.object({
  email: z.string().min(1, "メールアドレスは必須です"),
  password: z.string().min(1, "パスワードは必須です"),
})

export async function Login(prevState: unknown, formData: FormData) {
    const result = schema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { errors }
  }

  await signIn("credentials", {
  email: result.data.email,
  password: result.data.password,
  redirectTo: "/",
})
}