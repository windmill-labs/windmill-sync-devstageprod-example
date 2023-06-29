import { sleep } from "https://deno.land/x/sleep/mod.ts";

export async function main(xyz: any = 123333, foo: string = "foooooooooo") {
  for (let i = 0; i < 20; i++) {
    console.log("sleep. .......e....");
    await sleep(0.62);
  }

  return "woke up";
}
