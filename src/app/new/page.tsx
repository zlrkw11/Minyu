export default function New() {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-8">
      <h1 className="text-3xl font-bold">Make a new blog</h1>
      <input className="border-4 border-zinc-600 rounded-md w-full h-16 justify-center p-4 flex-col flex"></input>
      <button className="px-4 py-2 border-2 border-slate-600 rounded-md duration-200 hover:border-slate-200 hover:text-slate-200">
        Post
      </button>
    </div>
  );
}
