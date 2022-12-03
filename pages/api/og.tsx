import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function(req: NextRequest) {
try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
        ? searchParams.get('title')?.slice(0, 100)
        : 'CJ Dunteman';

  return new ImageResponse(
    (
      <div
        tw="bg-white text-9xl flex w-full h-full text-center items-center justify-center text-purple-500 capitalize"
      >
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
} catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
}
}