import Image from "next/image";
import vercel from '@/public/vercel.svg'
import CreateFormButton from "./button";
import { signOut } from "@/auth";

export default function TopBar() {
    return (
        <div className="px-4">
            <div className="flex items-center justify-between">
                <Image src={vercel} alt="" className="pt-4 pr-4 pb-4 pl-10  w-30" />
                <h1 className="text-2xl">プログラミングブログ</h1>
                <CreateFormButton />
                <form
                    action=
                    {async () => {
                        'use server';
                        await signOut({ redirectTo: '/' });
                    }}>
                        <button>signOut</button>
                </form>

            </div>
        </div>
    )
}

