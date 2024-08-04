// --allow-run
const process = Deno.run({
  cmd: ["opa", "test", "-v", "."]
});

// Close to release Deno's resources associated with the process.
// The process will continue to run after close(). To wait for it to
// finish `await process.status()` or `await process.output()`.
process.close();
