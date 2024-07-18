import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
export default function Home() {
  return (
    <main
      className={`min-h-screen bg-violet-100 justify-between p-5 `}
    >
      <div className="flex shadow-xl rounded-xl p-4 w-full items-center justify-between  ">
        <h2 className="flex w-fit text-4xl text-indigo-900 text-center mx-auto font-semibold">
          Authentication & Authorization
        </h2>

        <div className="flex items-center">
          <button className="flex items-center justify-between p-3 m-4 border bg-sky-600 rounded-lg mr-2 text-white  text-xl border-none shadow-xl">
            <IoIosCreate className="text-2xl mr-2" />
            <Link href='/signup'> SignUp</Link>
          </button>

          <button className="flex items-center justify-between p-3 m-4 border bg-indigo-600 rounded-lg text-white  text-xl border-none shadow-xl">
            <FaSignInAlt className="text-2xl mr-2" /> <Link href='/signin'> SignIn</Link>
          </button>
        </div>
      </div>



    </main>
  );
}
