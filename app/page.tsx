import ProductCard from "@/app/components/ProductCard";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/authOptions";
import Image from "next/image";
import chaton from "@/public/images/chaton.jpg"
import {Metadata} from "next";
import HeavyComponent from "@/app/components/HeavyComponent";

export default async function Home() {
    const session = await getServerSession(authOptions);

    return (
        <main>
            <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
            <ProductCard/>
            <HeavyComponent/>
            <div className="relative h-screen">
                <Image
                    src="https://bit.ly/react-cover"
                    alt="petit chaton"
                    className="object-cover"
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                    quality={100}
                    priority
                />
            </div>
        </main>
    )
}

/*
export const metadata: Metadata = {
    title: '...',
    description: '...',
}*/

// export async function generateMetadata(): Promise<Metadata> {
//     const product = await fetch('');
//
//     return {
//         title: 'product.title',
//         description: 'product.description'
//     }
// }