"use client";
import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";
import { useRef, useEffect } from "react";
import "./editor.css"; // Custom styles for the editor
import dynamic from "next/dynamic";


// Import the editor dynamically with SSR disabled
const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>,
  }
);

export const EditorComponent = ({ initialValue, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(initialValue || "");
    }
  }, [initialValue]);

  const handleChange = () => {
    const content = editorRef.current?.getInstance().getMarkdown() || "";
    onChange(content);
  };

  return (
    <Editor
      initialValue={initialValue}
      previewStyle="tab"
      height="400px"
      useCommandShortcut={true}
      theme="light"
      onChange={handleChange}
      initialEditType="wysiwyg"
      ref={editorRef}
    />
  );
};
