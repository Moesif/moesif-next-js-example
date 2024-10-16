import { withLogging } from '@/utils/withLogging';
import applyMoesifMiddleware from '@/utils/applyMoesifMiddleware';

async function getHandler(request) {
  return new Response(JSON.stringify({ message: "Hello from the timetable API!" }), {
      status: 200,
      headers: {
          'Content-Type': 'application/json',
      },
  });
}


async function postHandler(request) {
  const data = await request.json();
  // Handle POST request with data
  return new Response(JSON.stringify({ message: "Data received!" }), { status: 201 });
}

export const GET = applyMoesifMiddleware(getHandler);
export const POST = applyMoesifMiddleware(postHandler);

