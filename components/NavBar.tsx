import Link from "next/link"

export const NavBar = () => {

    return (
        <div className="flex justify-end space-x-5 text-2xl pr-5">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
        </div>
    )
}

export default NavBar;