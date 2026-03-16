'use server'

import prisma from "@/app/lib/prisma"
import { redirect } from "next/navigation"

export async function deletePost(FormData:FormData) {
    const id = Number(FormData.get('id'))

    await prisma.post.delete({
        where:{id}
    })
    redirect("/")
}