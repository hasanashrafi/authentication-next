import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
export default function Home() {
  return (
    <main
      className={`min-h-screen min-w-screen bg-violet-100  `}
    >
      <div className="flex shadow-xl  p-4  items-center justify-between ">
        <h2 className="flex w-fit text-wrap text-2xl  text-indigo-900 text-center  font-semibold">
         Skin Care
        </h2>

        <div className="flex flex-wrap items-center justify-end">
          <button className="flex  w-240 justify-center  items-center p-1.5 m-1 border bg-sky-600 rounded-lg text-white  text-md border-none shadow-xl">
            <IoIosCreate className="sm:text-2xl mr-2" />
            <Link href='/signup' className="text-sm"> SignUp</Link>
          </button>

          <button className="flex  w-20 justify-center  items-center p-1.5 m-1 border bg-indigo-600 rounded-lg text-white  text-md border-none shadow-xl">
            <FaSignInAlt className="sm:text-2xl mr-2" />
             <Link href='/signin' className="text-sm"> SignIn</Link>
          </button>
           <button className="flex w-240 justify-center   items-center p-1.5 m-1 border bg-indigo-600 rounded-lg text-white  text-md border-none shadow-xl">
            <LuLayoutDashboard className="sm:text-2xl mr-2" />
             <Link href='/dashboard' className="text-sm"> Dashboard</Link>
          </button>
        </div>
      </div>



    </main>
  );
}
