let toolbarOptions = [
  ["bold", "italic", "underline"], // toggled buttons
  "strike"["blockquote"],
  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }][{ script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction
  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["link", "image", "video", "formula"],
  [{ color: [] }, { background: [] }],
  // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],
];
let quill = new Quill("#toolbar", {
  modules: {
    toolbar: toolbarOptions,
  },
  theme: "snow",
});
let obj = {};
const click1 = () => {
  obj = quill.root.innerHTML;
};
const click2 = () => {
  quill.root.innerHTML = "";
};
const click3 = () => {
  quill.root.innerHTML = obj;
  debugger;
};
