import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
export default function Home() {
  return (
    <main
      className={`min-h-screen min-w-screen bg-violet-100  `}
    >
      <div className="flex shadow-xl  p-4  items-center justify-between ">
        <h2 className="flex w-fit text-wrap text-2xl  text-indigo-900 text-center  font-semibold">
         Skin Care
        </h2>

        <div className="flex items-center">
          <button className="flex items-center justify-between p-1.5 m-2 border bg-sky-600 rounded-lg mr-2 text-white  text-md border-none shadow-xl">
            <IoIosCreate className="text-2xl mr-2" />
            <Link href='/signup'> SignUp</Link>
          </button>

          <button className="flex items-center justify-between p-1.5 m-2 border bg-indigo-600 rounded-lg text-white  text-md border-none shadow-xl">
            <FaSignInAlt className="text-2xl mr-2" /> <Link href='/signin'> SignIn</Link>
          </button>
        </div>
      </div>



    </main>
  );
}
