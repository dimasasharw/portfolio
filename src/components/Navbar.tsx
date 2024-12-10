import Link from "next/link"

const NavBar = () => {

  return (
    <>
      <div className="w-full h-[50px] flex justify-end items-center shrink-0 self-stretch py-0 px-7 border-b-2 border-b-slate-400 bg-slate-700">
        <Link
          className="flex p-2 justify-center items-center gap-2 rounded-lg text-Secondary-200 hover:text-Secondary-500 cursor-pointer"
          href={'/'}
        >
          <p className="text-size-4 font-500 hover:font-Neutrals-700">Home</p>
        </Link>
        <Link
          className="flex p-2 justify-center items-center gap-2 rounded-lg text-Secondary-200 hover:text-Secondary-500 cursor-pointer"
          href={'/resume'}
        >
          <p className="text-size-4 font-500 hover:font-Neutrals-700">Resume</p>
        </Link>
      </div>
    </>
  )
}

export default NavBar