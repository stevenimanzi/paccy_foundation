import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const target = resolve(
  "node_modules",
  "vinext",
  "dist",
  "server",
  "static-file-cache.js",
);
const original = await readFile(target, "utf8");
const buggy = "relativePath: path.relative(base, batch[j]),";
const fixed =
  'relativePath: path.relative(base, batch[j]).split(path.sep).join("/"),';

if (original.includes(fixed)) {
  console.log("Vinext Windows asset-path fix is already applied.");
} else if (original.includes(buggy)) {
  await writeFile(target, original.replace(buggy, fixed), "utf8");
  console.log("Applied Vinext Windows asset-path fix.");
} else {
  throw new Error(
    "The installed Vinext static-file cache has changed; review the Windows asset-path patch.",
  );
}
