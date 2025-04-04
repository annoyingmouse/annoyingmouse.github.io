import Showdown from "https://cdn.skypack.dev/showdown";

import { PublicGoogleSheetsParser } from "https://cdn.skypack.dev/public-google-sheets-parser";

const sheetId = "0AiRgQIhodQXfdGhhdTZDaEdjTy1ZV3h4T215NFRDUmc";
const converter = new Showdown.Converter();

const getPosts = async () => {
  const postsParser = new PublicGoogleSheetsParser(sheetId, {
    sheetName: "posts",
    useFormat: true,
  });
  const posts = await postsParser.parse();
  console.log(posts);
  return posts;
};

const getComments = async () => {
  const commentsParser = new PublicGoogleSheetsParser(sheetId, {
    sheetName: "comments",
    useFormat: true,
  });
  const comments = await commentsParser.parse();
  console.log(comments);
  return comments;
};

(async () => {
  let posts = await getPosts();
  let comments = await getComments();

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
  comments.forEach((comment) => {
    comment.content = converter.makeHtml(comment.what);
    comment.pubdate = createDateStamp(comment.Timestamp);
    comment.date = comment.Timestamp;
    comment.icon = md5(comment.who);
    comment.postId = Number(comment.postId);
    comment.who = comment.who;
    comment.icon = md5(comment.who);
    comments.push(comment);
    $(`article[data-id="${comment.postId}"] .comments`).show();
    $(`article[data-id="${comment.postId}"] .existing_comments`).append(
      $.render.addComment(comment),
    );
  });
})();
