// const router = require("../buntest/src/routers");

const server = Bun.serve({
  port : Bun.env.PORT || 3000,
  fetch(req){
    const url = new URL(req.url);
    // return new Response("Hello World fromvbr");
    if(url.pathname === "/"){
      console.log("[URL ] : ", url.href);
      return new Response("This is home page");
    }
    if(url.pathname === "/test"){
      console.log("[URL ] : ", url.href);
      return new Response("This is test page");
    }
    return new Response("404!");
  },
})

console.log(`Server is running on port ${server.port}`);