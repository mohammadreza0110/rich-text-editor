"use client";

import Link from "next/link";
import Editor from "./components/EditorContainer/Editor";
import { BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";
import Loading from "./utils/Loading";

export default function Home() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
  }, []);
  return (
    <>
      {loading && <Editor />}

      {!loading && <Loading />}

      <div className="flex justify-between mt-4">
        <Link href="https://github.com/mohammadreza0110/rich-text-editor">
          <div className="flex gap-3 select-none hover:text-slate-300 active:scale-90 transition-all duration-200 underline-offset-8 font-bold text-xl text-white items-center">
            <div>My Github</div>
            <BsGithub size={30} />
          </div>
        </Link>

        <p className="text-white text-left">
          Guide: Rapidly Tap Enter Twice to Cancellation of the Current Active
          Editor Item. (such as a Quote)
        </p>
      </div>
    </>
  );
}
