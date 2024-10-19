import Image from "next/image";
import Heart from "@/app/assets/heart.png";
import Like from "@/app/assets/like.svg";
export interface CardProps {
  text: string;
}
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
type props = CardProps;
const Card = ({ text }: props) => {
  "use client";
  return (
    <div className="rounded-md border-4 gap-4 flex justify-center items-center border-slate-700 hover:bg-slate-400 hover:border-slate-200 duration-500 py-16 w-full bg-slate-600">
      <div className="text-slate-200 m-4">
        <p>Hello this is a testing text ghoongongojgfenaefafafawfafawf</p>
        {text}
      </div>
      <Image
        className="cursor-pointer ml-auto mr-8 fill-white"
        src={Like}
        width={50}
        alt={""}
      />
    </div>
  );
};
