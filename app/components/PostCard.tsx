import Image from "next/image"
import Link from "next/link"
import vercel from '@/public/vercel.svg'
import { deletePost } from "../actions/deletePost";

export default function PostCard({ text, title, id }: { text: string; title: string; id: number }) {
  return (
    <div className="pl-4 pr-15 pt-4 pb-4 m-10 flex border rounded-lg justify-between"  >
      <Link href={`/posts/${id}`} className="flex">
        <Image src={vercel} alt='' className="w-80 h-40" />
        <div className="mt-5">
          <h1 className=" text-2xl font-bold">{title}</h1>
          <p className="pl-0">{text}</p>
        </div>
      </Link>
      <div className="flex flex-col justify-center gap-2">
        <form action={deletePost}>
          <input type="hidden" name="id" value={id} />
          <button type="submit" className="cursor-pointer text-red-500 px-4 py-2">削除</button>
        </form>
        <Link href={`/posts/${id}/edit`} className="cursor-pointer px-4 py-2">
          <p>編集</p>
        </Link>
      </div>

    </div>
  )
}