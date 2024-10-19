import Image from "next/image";
import Like from "@/app/assets/like.svg";
import { getBlogs } from "@/routes/blogRoutes";
import Link from "next/link";

export interface CardProps {
  text?: string;
}
export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div className="items-center justify-center flex flex-col m-8 gap-8">
      <h1 className="text-3xl">Profile picture</h1>
      <p>some random quotes</p>
      <Link
        href="/new"
        className="border-2 hover:border-zinc-300 border-black hover:bg-slate-300 duration-300 rounded-md py-2 px-4"
      >
        write
      </Link>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        {blogs.map((blog, index) => (
          <Card key={index} text={blog.content} />
        ))}
      </div>
    </div>
  );
}
type props = CardProps;
const Card = ({ text }: props) => {
  return (
    <div className="rounded-md border-4 gap-4 flex justify-center items-center border-slate-700 hover:bg-slate-400 hover:border-slate-200 duration-500 py-16 w-full bg-slate-600">
      <div className="text-slate-200 m-4">{text}</div>
      <Image
        className="cursor-pointer ml-auto mr-8 fill-white"
        src={Like}
        width={50}
        alt={""}
      />
    </div>
  );
};
