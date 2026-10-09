const copiedPages = await source.copyPages(source, indices);

for (let i = 0; i < copiedPages.length; i++) {
  const original = await output.embedPage(copiedPages[i]);

  const col = i % cols;
  const row = Math.floor(i / cols);
  const scale = Math.min(slotW / original.width, slotH / original.height);
  const drawW = original.width * scale;
  const drawH = original.height * scale;
  const x = margin + col * (slotW + gap) + (slotW - drawW) / 2;
  const y = height - margin - (row + 1) * slotH - row * gap
    + (slotH - drawH) / 2;

  sheet.drawPage(original, { x, y, width: drawW, height: drawH });
}
