import Image from "next/image";
import vercel from '@/public/vercel.svg'

export default function TopBar() {
    return (
        <div>
            <div className="flex items-center">
                <Image src={vercel} alt="" className="pt-4 pr-4 pb-4 pl-10  w-30" />
                <h1 className="text-2xl">プログラミングブログ</h1>
            </div>
        </div>
    )
}

