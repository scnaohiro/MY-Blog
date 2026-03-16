import { Post } from "@prisma/client";
import { editPost } from "@/app/actions/editPost";

export default function EditFormUI({post} : {post:Post|undefined}) {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
            <form action={editPost} className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl">
                 <h1 className="text-2xl font-bold mb-8 text-gray-800">記事を編集</h1>
                <div className="mb-6" >
                    <label className="block text-sm font-medium text-gray-700 mb-2">タイトル</label>
                    <input type="text" name="title" defaultValue={post?.title} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">本文</label>
                    <textarea name="text" rows={6} defaultValue={post?.text} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <input type="hidden" name="id" value={post?.id} />
                <button type="submit" className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-3 rounded-lg transition">投稿する</button>
            </form>
        </main>
    )
}
