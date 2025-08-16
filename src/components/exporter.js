import * as htmlToImage from "html-to-image";
import jsPDF from "jspdf";
export async function exportPNG(node, filename = "poster.png") {
  const dataUrl = await htmlToImage.toPng(node, { pixelRatio: 2 });
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  a.click();
}
export async function exportPDF(
  node,
  filename = "poster.pdf",
  w = 1080,
  h = 1350
) {
  const dataUrl = await htmlToImage.toPng(node, { pixelRatio: 2 });
  const pxToMm = (px) => (px * 25.4) / 96;
  const pdf = new jsPDF({
    orientation: w > h ? "l" : "p",
    unit: "mm",
    format: [pxToMm(w), pxToMm(h)],
  });
  pdf.addImage(dataUrl, "PNG", 0, 0, pxToMm(w), pxToMm(h));
  pdf.save(filename);
}
export async function shareImage(node, filename = "poster.png") {
  try {
    const dataUrl = await htmlToImage.toPng(node, { pixelRatio: 2 });
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const file = new File([blob], filename, { type: blob.type });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title: "Share" });
    } else {
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = filename;
      a.click();
    }
  } catch (e) {
    console.error(e);
  }
}
