import { google } from "googleapis";

export const revalidate = 60;

export async function GET() {
  const auth = new google.auth.JWT({
    email: process.env.GDRIVE_CLIENT_EMAIL,
    key: process.env.GDRIVE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/drive.readonly"],
  });

  const drive = google.drive({ version: "v3", auth });

  const res = await drive.files.list({
    q: `'${process.env.GDRIVE_FOLDER_ID}' in parents and trashed = false`,
    fields: "files(id, name)",
  });

  const images =
    res.data.files
      ?.map((file) => ({
        id: file.id!,
        name: file.name!,
        url: `/api/image/${file.id}`,
      }))
      .sort((a, b) => {
        const getNum = (name: string) => parseInt(name.split(".")[0], 10);

        return getNum(a.name) - getNum(b.name);
      }) ?? [];

  return new Response(JSON.stringify(images), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "CDN-Cache-Control": "no-store",
      "Vercel-CDN-Cache-Control": "no-store",
    },
  });
}
