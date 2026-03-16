import { getPosts } from "@/app/lib/posts"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const posts = await getPosts()
  const post = posts.find((p) => p.id === Number(id))

  return {
    title: post?.title,
  }
}
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    id: String(post.id)
  }))
}


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const posts = await getPosts()
  const post = posts.find((p) => p.id === Number(id))
  

  return (
    <div>
      <h1 className="text-2xl text-center mt-20">{post?.title}</h1>
      <p className="ml-50 mt-20">{post?.text}</p>
    </div>

  )
}