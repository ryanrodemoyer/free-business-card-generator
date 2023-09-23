export function shorten(val: string) {
  return val
    .replace("https://www.", "")
    .replace("http://www.", "")
    .replace("https://", "")
    .replace("www.", "");
}
