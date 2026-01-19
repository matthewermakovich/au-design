import { google } from "googleapis";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const auth = new google.auth.JWT({
    email: process.env.GDRIVE_CLIENT_EMAIL,
    key: process.env.GDRIVE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({
    version: "v3",
    auth,
  });

  const file = await drive.files.get(
    {
      fileId: params.id,
      alt: "media",
    },
    { responseType: "arraybuffer" },
  );

  return new Response(file.data as ArrayBuffer, {
    headers: {
      "Content-Type": file.headers["content-type"] ?? "image/jpeg",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "CDN-Cache-Control": "public, s-maxage=3600",
      "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
    },
  });
}
