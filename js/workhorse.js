import Showdown from "https://cdn.skypack.dev/showdown";
import { createDateStamp, md5 } from "./functions.js";

const sheetId = "0AiRgQIhodQXfdGhhdTZDaEdjTy1ZV3h4T215NFRDUmc";
const converter = new Showdown.Converter();

const getPosts = async () => {
  const postsParser = new PublicGoogleSheetsParser(sheetId, {
    sheetName: "posts",
    useFormat: true,
  });
  const posts = await postsParser.parse();
  return posts;
};

(async () => {
  let posts = await getPosts();

  posts.forEach((post) => {
    post.content = converter.makeHtml(post.content);
    post.pubdate = createDateStamp(post.date);
    post.link = encodeURI(post.title);
    post.id = Number(post.id);
    const content = $.render.addPost(post);
    const fragment = Document.parseHTMLUnsafe(content);
    Array.from(fragment.body.children).forEach((child) => {
      Array.from(child.querySelectorAll("img")).forEach((img) => {
        img.classList.add("img-fluid");
      });
    });
    $("#content").append(fragment.body.children);
    $("#siteLinks").append(
      $("<li></li>", {
        class: "dropdown-item",
        html: `<a href="#${post.id}">${post.title}</a>`,
      }),
    );
  });
  $("pre code").each(function (i, e) {
    hljs.highlightElement(e);
  });
})();
