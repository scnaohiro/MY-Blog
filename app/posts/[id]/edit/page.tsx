import EditFormUI from "@/app/components/edit-form"
import { getPosts } from "@/app/lib/posts"


export default async function EditForm({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const posts = await getPosts()
    const post = posts.find((p) => p.id === Number(id))

    return (
        <>
            <EditFormUI post={post} />
        </>
    )
}



