import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
//@ts-ignore
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./MenuBar";

export default () => {
  const editor = useEditor({
    extensions: [
      Image.configure({
        HTMLAttributes: {
          class: "mx-auto w-full object-cover max-h-[300px]",
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
        defaultAlignment: "right",
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      //@ts-ignore
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
  });

  const handleEditorChanges = () => {
    const html = editor?.getHTML();
    const json = editor?.getJSON();
    const text = editor?.getText();
    console.log("Html ====>", html);
    console.log("JSON ====>", json);
    console.log("Text ====>", text);
  };

  return (
    <>
      <div className="text-white rounded-xl bg-slate-800">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      <button
        type="button"
        onClick={handleEditorChanges}
        className="w-full px-5 py-2.5 my-2 text-xl font-bold text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
      >
        Log Changes
      </button>

    </>
  );
};
