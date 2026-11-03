export function linkify(text) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Matches either [label](url) or a bare url
  return escaped.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<]+)/g,
    (match, label, labeledUrl, bareUrl) => {
      const url = labeledUrl || bareUrl;
      const visible = label || bareUrl;
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${visible}</a>`;
    }
  );
}