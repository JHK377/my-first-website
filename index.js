export default {
  async fetch(request) {
    return new Response(`
      <html>
        <body>
          <h1>My first Cloudflare Worker</h1>
        </body>
      </html>
    `, {
      headers: { "content-type": "text/html" },
    });
  },
};
