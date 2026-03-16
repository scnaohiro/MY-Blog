'use client'
import { useActionState } from "react"
import { Login } from "../actions/login"

export default function LoginUI() {
    const [state, formAction] = useActionState(Login, null)
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
            <form action={formAction} className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-2xl">
                <h1 className="text-2xl font-bold mb-8 text-gray-800">ログイン</h1>
                <div className="mb-6" >
                    <label className="block text-sm font-medium text-gray-700 mb-2">email</label>
                    <input type="text" name="email" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">password</label>
                    <input type="password" name="password" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                <button type="submit" className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-3 rounded-lg transition">投稿する</button>
            </form>
        </main>
    )
}