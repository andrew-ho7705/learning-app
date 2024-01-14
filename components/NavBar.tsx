"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavBar = () => {
    const path = usePathname();
    return (
        <>
            {!path.match(/\d/) && (
                <div className="flex justify-end space-x-5 text-2xl pr-5">
                    <Link href="/">Home</Link>
                    <Link href="/courses">Courses</Link>
                </div>
            )}
        </>
    );
};

export default NavBar;
