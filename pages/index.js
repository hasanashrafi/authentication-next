

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
      <div>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="text" name="password" placeholder="Enter password" />
      </div>
    </main>
  );
}
