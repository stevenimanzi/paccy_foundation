import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("homepage source contains the Paccy Foundation branded content", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Paccy Foundation/i);
  assert.match(page, /Every child deserves a/i);
  assert.match(page, /A child’s future begins in a classroom/i);
});
