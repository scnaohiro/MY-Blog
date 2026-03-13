import Image from "next/image"
import Link from "next/link"
import vercel from '@/public/vercel.svg'

export default function PostCard({ text, title , id }:{ text: string; title: string; id: number  }) {
  return (
    <div className="pl-4 pr-150 pt-4 pb-4 "  >
      <Link href={`/posts/${id}`} className="flex border rounded-lg">
        <Image src={vercel} alt='' className="w-80 h-40" />
        <div className="mt-5">
          <h1 className=" text-2xl font-bold">{title}</h1>
          <p className="pl-0">{text}</p>
        </div>
      </Link>
    </div>
  )
}