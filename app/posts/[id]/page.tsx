import { getPosts } from "@/app/lib/posts"

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const posts = await getPosts()
  const post = posts.find((p) => p.id === Number(id))

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.text}</p>
    </div>
  )
}