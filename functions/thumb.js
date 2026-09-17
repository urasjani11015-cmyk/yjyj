export async function onRequest(context) {
  // Apni image ko fetch karo (project ke andar se)
  const imageUrl = new URL('/ththth (1).gif', context.request.url);
  const imageResponse = await fetch(imageUrl);
  const imageBuffer = await imageResponse.arrayBuffer();

  return new Response(imageBuffer, {
    headers: {
      'Content-Type': 'image/jpeg', // ya image/png
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
