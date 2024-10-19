import Image from "next/image";
import Like from "@/app/assets/like.svg";
export default function Home() {
  return (
    <div className="items-center justify-center flex flex-col m-8 gap-8">
      <h1 className="text-3xl">Profile picture</h1>
      <p>hello</p>

      <div className="flex flex-col justify-center items-center w-full gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

const Card = () => {
  "use client";
  return (
    <div className="rounded-md border-4 border-slate-700 hover:bg-slate-400 hover:border-slate-200 duration-500 py-16 w-full bg-slate-600">
      <Image className="ml-auto mr-8" src={Like} width={50} alt={""} />
    </div>
  );
};
