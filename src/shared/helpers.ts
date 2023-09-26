function removeTrailingSlash(str) {
  if (str.endsWith("/")) {
    return str.slice(0, -1);
  }
  return str;
}

export function shorten(val: string) {
  return removeTrailingSlash(
    val
      .replace("https://www.", "")
      .replace("http://www.", "")
      .replace("https://", "")
      .replace("www.", "")
      .replace("github.com/", "@")
      .replace("instagram.com/", "@")
      .replace("linkedin.com/in/", "@")
      .replace("twitter.com/", "@")
      .replace("youtube.com/", "@")
      .replace("@@", "@"),
  );
}

export function print(element) {
  html2canvas(element, { scale: "3" }).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");

    // Create a link element to download the image
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "screenshot.png";

    // Simulate a click on the link to trigger the download
    link.click();
  });
}
