import Link from "next/link"

export default function CreateFormButton (){

    return (
        <>
        <Link href="/posts/new">
        <button type="submit" className="bg-blue-200 px-5 py-3 rounded-2xl hover:bg-blue-100 cursor-pointer">記事を作成する</button>
        </Link>
        </>
    )

    
}

