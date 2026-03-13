import prisma from "./prisma"

export async function getPosts() {
  const posts = await prisma.post.findMany()
  return posts
}