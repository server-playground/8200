Deno.serve(
  {
    port: 8200,
  },
  (req) => {
    console.log('')
    console.log(req.url)
    console.log(req.headers)
    return new Response('hello world')
  }
)
