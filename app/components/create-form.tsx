'use client'
import { createPost } from "../actions/createPost";
import { useActionState } from "react"

export default function CreateFormUI() {
    const [state, formAction] = useActionState(createPost, null)

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
            <form action={formAction} className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-8 text-gray-800">新しい記事を投稿</h1>
                <div className="mb-6" >
                    <label className="block text-sm font-medium text-gray-700 mb-2">タイトル</label>
                    <input type="text" name="title" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    {state?.errors?.title && (
                        <p className="text-red-500 text-sm">{state.errors.title[0]}</p>
                    )}
                </div>
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">本文</label>
                    <textarea name="text" rows={6} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    {state?.errors?.text && (
                        <p className="text-red-500 text-sm">{state.errors.text[0]}</p>
                    )}
                </div>
                <button type="submit" className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-3 rounded-lg transition">投稿する</button>
            </form>
        </main>
    )
}
