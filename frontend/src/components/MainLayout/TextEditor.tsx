import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface ChangeFunction {
  changeFunction: (value: string) => void;
}

const TextEditor = ({ changeFunction }: ChangeFunction) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <ReactQuill
      theme="snow"
      className="h-[40rem]"
      placeholder="Write something amazing..."
      formats={[
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
      ]}
      onChange={changeFunction}
      modules={modules}
    />
  );
};

export default TextEditor;
