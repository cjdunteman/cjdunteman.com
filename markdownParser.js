const parseMarkdown = (text) => {
  const toHTML = text
    .replace(/#{1} (.*)/gim, "<h1>$1</h1>") // H1
    .replace(/#{2} (.*)/gim, "<h2>$1</h2>") // H2
    .replace(/#{3} (.*)/gim, "<h3>$1</h3>") // H3
    .replace(/#{4} (.*)/gim, "<h4>$1</h4>") // H4
    .replace(/#{5} (.*)/gim, "<h5>$1</h5>") // H5
    .replace(/#{6} (.*)/gim, "<h6>$1</h6>") // H6
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>") // Bold
    .replace(/\*(.*)\*\*/gim, "<i>$1</i>") // Italic
    .replace(/\n*.*/, "<p>$1</p>"); // Paragraph
};
