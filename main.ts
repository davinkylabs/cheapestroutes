import "jsr:@std/dotenv/load"

const TICKETMASTER_API_KEY = Deno.env.get("TICKETMASTER_API_KEY")

Deno.serve(async (req): Promise<Response> => {
  const url = new URL(req.url)
  console.log({ url })
  const pathname = url?.pathname

  if (pathname.startsWith("/api/")) {
    return apiHandler(pathname, url)
  }

  const filePath = pathname === "/" ? "/index.html" : pathname
  const fullPath = `.public${filePath}`

  switch (pathname) {
    default:
      try {
        const file = await Deno.readFile(fullPath)

        return new Response(file, { status: 200, statusText: "File served!" })
      } catch (error) {
        console.log({ error })
        return new Response("File not found!")
      }
  }
})

const apiHandler = (pathname: string, url: URL) => {
  console.log(pathname)
  switch (pathname) {
    case "/api/fetch_events": {
      const keyword = url.searchParams.get("keyword")
      return fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&apikey=${TICKETMASTER_API_KEY}`,
      ).then((response) => response.json()).then((data) => {
        return new Response(JSON.stringify(data._embedded?.events || []))
      })
    }
    // case "/api/fetch_events":
    //   return fetch(
    //     `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TICKETMASTER_API_KEY}`,
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Full API response:", data); // Log the full response to see its structure
    //       const events = data._embedded?.events || [];
    //       return new Response(JSON.stringify(events));
    //     });
    //

    default:
      return new Response("No Endpoint")
  }
}
