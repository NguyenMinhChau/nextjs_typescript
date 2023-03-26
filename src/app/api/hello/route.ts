export async function GET(request: Request, response: Response) {
  return new Response(JSON.stringify({ message: 'Hello, Next.js!' }));
}
