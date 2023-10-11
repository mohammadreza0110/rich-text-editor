"use client";

import Link from "next/link";
import Editor from "./components/EditorContainer/Editor";
import { BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Editor />

      <Link href="https://github.com/mohammadreza0110">
        <div className="flex gap-3 font-bold text-xl text-white font-sans items-center">
          <span>MyGithub</span>
          <BsGithub size={30} />
        </div>
      </Link>
    </>
  );
}
