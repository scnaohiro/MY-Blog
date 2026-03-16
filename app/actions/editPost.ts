'use server'

import { redirect } from "next/navigation"
import prisma from "@/app/lib/prisma"

export async function editPost(FormData: FormData) {
    const id = Number(FormData.get('id'))
    const title = FormData.get('title') as string
    const text = FormData.get('text') as string

    await prisma.post.update({
        where: { id },
        data: { title, text }
    })


    redirect("/")
}