import Link from "next/link"

const Navbar = () => {
    return (
        <header className=" bg-slate-600">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
                <Link href="/" className="text-xl font-bold text-white">ANIMEKU</Link >
                <input placeholder="Search Anime.." className=""></input>
            </div>
        </header>
    )
}

export default Navbar