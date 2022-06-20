import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Jack Gisel",
  author: "Jack Gisel",
  avatar: "./jg.jpeg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:j@ckgisel.com" },
    { title: "GitHub", url: "https://github.com/jackgisel" },
  ],
  background: "#f9f9f9",
  middlewares: [
    ga("UA-91008042-3"),
    redirects({
      "first-post.html": "first-post",
    }),
  ],
});
