import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
    title: "Learning App",
    description: "Educational application for students in grade school"
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="m-5 bg-slate-400">
                <NavBar />
                {children}
            </body>
        </html>
    );
}
