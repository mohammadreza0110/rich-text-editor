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

      <Link href="https://github.com/mohammadreza0110">
        <div className="flex gap-3 font-bold text-xl text-white items-center">
          <span>My Github</span>
          <BsGithub size={30} />
        </div>
        <p className="text-white text-left">
          Guide: Rapidly Tap Enter Twice to Cancellation of the Current Active
          Editor Item. (such as a Quote)
        </p>
      </Link>
    </>
  );
}
