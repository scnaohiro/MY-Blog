'use server'

import { redirect } from "next/navigation"
import prisma from "../lib/prisma"
import { z } from "zod"

const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  text: z.string().min(1, "本文は必須です"),
})

export async function createPost(prevState: unknown, formData: FormData) {
    const result = schema.safeParse({
    title: formData.get('title'),
    text: formData.get('text'),
  })

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { errors }
  }

  await prisma.post.create({
    data: { title: result.data.title, text: result.data.text }
  })

    redirect("/")
}