import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: imagePath } = await params;
  const filePath = path.join(process.cwd(), 'content', 'posts', ...imagePath);

  // Security: Prevent directory traversal
  const realPath = fs.realpathSync(filePath);
  const contentDir = fs.realpathSync(path.join(process.cwd(), 'content', 'posts'));
  
  if (!realPath.startsWith(contentDir)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  if (!fs.existsSync(realPath)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const fileBuffer = fs.readFileSync(realPath);
  const ext = path.extname(realPath).toLowerCase();
  
  const mimeTypes: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
