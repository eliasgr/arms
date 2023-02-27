export async function GET(request: Request) {
  request.method;
  return new Response(`${request.method}-Hello, Next.js!`);
}
