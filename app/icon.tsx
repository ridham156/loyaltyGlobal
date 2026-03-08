import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default async function Icon() {
  const logoData = await readFile(
    join(process.cwd(), "public", "assets", "logo.png")
  );
  const dataUrl = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    <img src={dataUrl} style={{ width: "100%", height: "100%" }} />,
    { ...size }
  );
}
