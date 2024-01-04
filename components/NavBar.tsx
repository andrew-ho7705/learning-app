import Link from "next/link"

export const NavBar = () => {
    return (
        <div className="border flex justify-end space-x-5 text-2xl pr-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Classes</Link>
        </div>
    )
}

export default NavBar;