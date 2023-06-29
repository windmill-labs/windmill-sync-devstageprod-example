export async function main(
  union: "Hello World" | "Welcome" = "foo",
  str = "default arg"
) {
  return { union, str };
}
