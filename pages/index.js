

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-violet-100 justify-between p-5 `}
    >
      <div className="shadow-xl rounded-xl p-4 w-full items-center justify-between font-mono text-sm ">
        <h2 className="flex w-fit text-4xl text-indigo-900 text-center mx-auto font-semibold">
          Authentication & Authorization
        </h2>

      </div>
    
      <div className="flex flex-col bg-indigo-200 rounded-lg shadow-xl mx-auto justify-center p-5  content-center mt-10 w-fit">
        <h3 className="text-center text-3xl font-semibold font-mono text-gray-500">Login</h3>
        <input type="text" name="username" placeholder="Enter username" className="m-5 p-2 rounded text-gray-900 outline-none focus:border focus:border-indigo-800 w-96 text-lg shadow-xl" />
        <input type="text" name="password" placeholder="Enter password" className="m-5 p-2 rounded text-gray-900 outline-none focus:border focus:border-indigo-800 w-96 text-lg shadow-xl" />
      </div>
    </main>
  );
}
