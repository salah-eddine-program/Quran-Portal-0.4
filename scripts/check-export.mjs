import { existsSync, readFileSync } from "node:fs";
import { resolve, sep } from "node:path";

const outDir = resolve("out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const requiredFiles = [
  "index.html",
  "assets/js/app.js",
  "assets/css/styles.css",
  "assets/images/icon.svg",
  "manifest.webmanifest",
  "service-worker.js",
];

const missing = requiredFiles.filter((file) => !existsSync(resolve(outDir, file)));
if (missing.length) {
  console.error("Static export is missing required files:", missing.join(", "));
  process.exit(1);
}

const html = readFileSync(resolve(outDir, "index.html"), "utf8");
const references = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((reference) => reference.startsWith("/") && !reference.startsWith("//"));
const broken = [];

for (const reference of references) {
  const parsed = new URL(reference, "https://export-check.invalid");
  let pathname = decodeURIComponent(parsed.pathname);
  if (basePath && (pathname === basePath || pathname.startsWith(basePath + "/"))) {
    pathname = pathname.slice(basePath.length) || "/";
  }
  if (pathname === "/") continue;
  const target = resolve(outDir, "." + pathname);
  if (target !== outDir && !target.startsWith(outDir + sep)) {
    broken.push(reference + " (outside export)");
  } else if (!existsSync(target)) {
    broken.push(reference);
  }
}

if (broken.length) {
  console.error("Static export references missing files:", broken.join(", "));
  process.exit(1);
}

console.log("Static export verified: " + requiredFiles.length + " required files and " + references.length + " local HTML references.");
