import './globals.css'
import type {Metadata} from 'next'
import {Inter, Roboto} from 'next/font/google'
import localFont from "next/dist/compiled/@next/font/dist/local";
import NavBar from "@/app/NavBar";
import AuthProvider from "@/app/auth/Provider";
import GoogleAnalyticsScript from "@/app/GoogleAnalyticsScript";

const inter = Inter({subsets: ['latin']})
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500']
})
// const poppins = localFont({
//     src: '',
//     variable: '--font-poppins'
// })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
    // openGraph: {
    //     title: '...',
    //     description: '...'
    // }
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="winter">
        <GoogleAnalyticsScript/>
        <body className={roboto.className}>
        <AuthProvider>
            <NavBar/>
            <main className="p-5">
                {children}
            </main>
        </AuthProvider>
        </body>
        </html>
    )
}