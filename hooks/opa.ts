import { copy } from "https://deno.land/std@0.104.0/io/util.ts";

// --allow-run
const process = Deno.run({
  cmd: ["opa", "test", "-v", "."],
  stdout: "piped",
  stderr: "piped",
});

copy(process.stdout, Deno.stdout);
copy(process.stderr, Deno.stderr);

await process.status();
console.log("Done!");

// Close to release Deno's resources associated with the process.
// The process will continue to run after close(). To wait for it to
// finish `await process.status()` or `await process.output()`.
process.close();
