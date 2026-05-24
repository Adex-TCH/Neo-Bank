import fs from "node:fs";
import path from "node:path";

const outputPath = path.resolve("docs", "ui-layout-explanations.pdf");

const blocks = [
  {
    type: "title",
    text: "Bank Dashboard UI Notes",
  },
  {
    type: "paragraph",
    text:
      "This guide combines two explanations from the project: what code creates the hovers, animations, and divider lines, and what code controls the whole layout plus the alignment of cards, sections, icons, and images.",
  },
  {
    type: "paragraph",
    text:
      "Main files involved: src/styles/global.css, src/components/Navbar/Navbar.css, src/components/Cards/Cards.css, src/components/Charts/Charts.css, src/layouts/MainLayout.tsx, and src/pages/Dashboard.tsx.",
  },
  {
    type: "section",
    text: "1. Hovers, Animations, and Divider Lines",
  },
  {
    type: "subsection",
    text: "Icon hover animation",
  },
  {
    type: "paragraph",
    text:
      "The shared icon behavior comes from .icon-button in src/styles/global.css. The smooth effect happens because of transition: 0.25s ease;. On :hover and :focus, the background changes and a ring is added with box-shadow.",
  },
  {
    type: "code",
    lines: [
      ".icon-button {",
      "  transition: 0.25s ease;",
      "}",
      "",
      ".icon-button:hover,",
      ".icon-button:focus {",
      "  background-color: #313131;",
      "  box-shadow: 0 0 0 4px #1f1f1f, 0 0 0 5px #969593;",
      "}",
    ],
  },
  {
    type: "subsection",
    text: "Button hover animation",
  },
  {
    type: "paragraph",
    text:
      "The same pattern is used for regular buttons like .flat-button, .save-button, and .settings-button. The animation is not coming from React; it is CSS changing color and background smoothly over time.",
  },
  {
    type: "subsection",
    text: "Navbar tab line effect",
  },
  {
    type: "paragraph",
    text:
      "In src/components/Navbar/Navbar.css, each tab link starts with border-top: 2px solid transparent. When the tab becomes active, hovered, or focused, the border color changes to white. That creates the top line effect.",
  },
  {
    type: "code",
    lines: [
      ".tabs a {",
      "  border-top: 2px solid transparent;",
      "  transition: 0.25s ease;",
      "}",
      "",
      ".tabs a.active,",
      ".tabs a:hover,",
      ".tabs a:focus {",
      "  color: #ffffff;",
      "  border-color: #ffffff;",
      "}",
    ],
  },
  {
    type: "subsection",
    text: "Profile image ring",
  },
  {
    type: "paragraph",
    text:
      "The avatar ring on hover is also from CSS. On .user-profile:hover span:last-child, a box-shadow is applied around the circular image wrapper.",
  },
  {
    type: "subsection",
    text: "Card lift animation",
  },
  {
    type: "paragraph",
    text:
      "The service cards use a small hover lift in src/components/Cards/Cards.css. The movement is created with transform: translateY(-5px), while transition makes the move feel smooth.",
  },
  {
    type: "code",
    lines: [
      ".tile {",
      "  transition: 0.25s ease;",
      "}",
      "",
      ".tile:hover {",
      "  transform: translateY(-5px);",
      "}",
    ],
  },
  {
    type: "subsection",
    text: "Divider lines",
  },
  {
    type: "paragraph",
    text:
      "The lines you see between areas are mostly plain borders: border-bottom under the logo and nav tabs, border-left between action groups, and border-top plus border-bottom in payment rows.",
  },
  {
    type: "bullet",
    text: "transition gives smooth change",
  },
  {
    type: "bullet",
    text: ":hover and :focus define the interaction state",
  },
  {
    type: "bullet",
    text: "transform creates movement",
  },
  {
    type: "bullet",
    text: "box-shadow creates rings or glow",
  },
  {
    type: "bullet",
    text: "border-top, border-bottom, and border-left create lines",
  },
  {
    type: "section",
    text: "2. Whole Layout and Alignment",
  },
  {
    type: "subsection",
    text: "The page skeleton",
  },
  {
    type: "paragraph",
    text:
      "The structure starts in src/layouts/MainLayout.tsx. It creates the outer wrapper .app, then places the navbar above the main body, and inside the main body it places the sidebar and the content area.",
  },
  {
    type: "code",
    lines: [
      "<div className=\"app\">",
      "  <Navbar />",
      "  <div className=\"app-body\">",
      "    <Sidebar />",
      "    <main className=\"app-body-main-content\">...</main>",
      "  </div>",
      "</div>",
    ],
  },
  {
    type: "paragraph",
    text:
      "The alignment of those blocks is then handled in src/styles/global.css by CSS Grid.",
  },
  {
    type: "code",
    lines: [
      ".app-body {",
      "  display: grid;",
      "  grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);",
      "  gap: clamp(24px, 4vw, 56px);",
      "}",
    ],
  },
  {
    type: "paragraph",
    text:
      "This means the sidebar gets the first column, the main area gets the second column, and the gap controls the space between them.",
  },
  {
    type: "subsection",
    text: "The dashboard split",
  },
  {
    type: "paragraph",
    text:
      "In src/pages/Dashboard.tsx, the dashboard is split into two columns: .dashboard-main-column for service and transfer sections, and .dashboard-sidebar-column for the payment panel.",
  },
  {
    type: "paragraph",
    text:
      "That arrangement is also controlled by Grid in src/styles/global.css.",
  },
  {
    type: "code",
    lines: [
      ".dashboard-layout {",
      "  display: grid;",
      "  grid-template-columns: minmax(0, 1.6fr) minmax(280px, 0.9fr);",
      "  gap: clamp(24px, 4vw, 56px);",
      "}",
    ],
  },
  {
    type: "paragraph",
    text:
      "The left side is intentionally wider, while the right side stays narrower for the payment section.",
  },
  {
    type: "subsection",
    text: "How section headers align",
  },
  {
    type: "paragraph",
    text:
      "Inside most sections, alignment is handled with Flexbox. For example: .service-section-header aligns search, dropdown, and button; .transfer-section-header aligns the title and filter area; and .payment-section-header aligns text and card buttons.",
  },
  {
    type: "code",
    lines: [
      "display: flex;",
      "align-items: center;",
      "justify-content: space-between;",
      "gap: 1rem;",
    ],
  },
  {
    type: "paragraph",
    text:
      "align-items: center handles vertical alignment, justify-content: space-between pushes groups apart, and gap sets spacing.",
  },
  {
    type: "subsection",
    text: "How the service cards line up",
  },
  {
    type: "paragraph",
    text:
      "In src/components/Cards/BalanceCard.tsx, the cards are rendered inside .tiles. The actual alignment is done by CSS Grid.",
  },
  {
    type: "code",
    lines: [
      ".tiles {",
      "  display: grid;",
      "  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));",
      "  gap: 1rem;",
      "}",
    ],
  },
  {
    type: "paragraph",
    text:
      "This makes the cards auto-wrap and stay evenly spaced. Each card itself is also a flex column, which is why the title sits near the top and the action link stays near the bottom.",
  },
  {
    type: "subsection",
    text: "How transfer rows line up",
  },
  {
    type: "paragraph",
    text:
      "In src/components/Cards/TransactionCard.tsx, each transfer row is made of three main pieces: logo, details, and amount. The outer row uses Flexbox, while the details area uses Grid.",
  },
  {
    type: "code",
    lines: [
      ".transfer {",
      "  display: flex;",
      "  align-items: center;",
      "  gap: 1.25rem;",
      "}",
      "",
      ".transfer-details {",
      "  display: grid;",
      "  grid-template-columns: repeat(3, minmax(0, 1fr));",
      "  gap: 1rem;",
      "}",
    ],
  },
  {
    type: "paragraph",
    text:
      "So Flexbox aligns the major blocks, and Grid splits the information into equal inner columns.",
  },
  {
    type: "subsection",
    text: "How payment cards line up",
  },
  {
    type: "paragraph",
    text:
      "In src/components/Charts/ExpenseChart.tsx, each payment row has a small card plus a details block. The row uses Flexbox, and the inner details row also uses Flexbox to separate the amount from the arrow button.",
  },
  {
    type: "subsection",
    text: "How images are aligned",
  },
  {
    type: "paragraph",
    text:
      "Images are controlled in two main ways: global image rules like display: block and max-width: 100% prevent strange spacing and overflow, while specific rules such as object-fit: cover and object-position: center top keep the profile image neatly cropped inside its circular frame.",
  },
  {
    type: "subsection",
    text: "How responsiveness happens",
  },
  {
    type: "paragraph",
    text:
      "The layout changes for smaller screens through @media queries. Those rules switch multi-column grids to single-column layouts, allow rows to wrap, reduce gaps, and make stacked mobile versions of cards and forms.",
  },
  {
    type: "bullet",
    text: "grid controls the big page structure",
  },
  {
    type: "bullet",
    text: "flex controls alignment inside sections",
  },
  {
    type: "bullet",
    text: "gap, margin, and padding control spacing",
  },
  {
    type: "bullet",
    text: "object-fit and width rules control image placement",
  },
  {
    type: "bullet",
    text: "@media queries handle smaller screens",
  },
];

const pageWidth = 595;
const pageHeight = 842;
const marginX = 52;
const marginTop = 60;
const marginBottom = 56;
const contentWidth = pageWidth - marginX * 2;

let pages = [];
let currentPage = [];
let cursorY = pageHeight - marginTop;

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function estimateWidth(text, fontSize) {
  let units = 0;

  for (const char of text) {
    if (char === " ") {
      units += 0.28;
    } else if ("ilI.,:;'|!".includes(char)) {
      units += 0.25;
    } else if ("mwMW@#%&".includes(char)) {
      units += 0.85;
    } else if ("ABCDEFGHJKLMNOPQRSTUVWXYZ".includes(char)) {
      units += 0.66;
    } else if ("0123456789".includes(char)) {
      units += 0.56;
    } else {
      units += 0.52;
    }
  }

  return units * fontSize;
}

function wrapText(text, fontSize, width) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;

    if (!current || estimateWidth(test, fontSize) <= width) {
      current = test;
    } else {
      lines.push(current);
      current = word;
    }
  }

  if (current) {
    lines.push(current);
  }

  return lines;
}

function wrapCodeLine(line, fontSize, width) {
  if (!line) {
    return [""];
  }

  const parts = [];
  let current = "";

  for (const char of line) {
    const test = current + char;
    const approxWidth = test.length * fontSize * 0.6;

    if (current && approxWidth > width) {
      parts.push(current);
      current = char;
    } else {
      current = test;
    }
  }

  if (current) {
    parts.push(current);
  }

  return parts;
}

function ensureSpace(heightNeeded) {
  if (cursorY - heightNeeded < marginBottom) {
    finishPage();
  }
}

function finishPage() {
  if (currentPage.length > 0) {
    pages.push(currentPage.join("\n"));
  }

  currentPage = [];
  cursorY = pageHeight - marginTop;
}

function addTextBlock(lines, options) {
  const {
    font = "F1",
    fontSize = 11,
    indent = 0,
    leading = fontSize * 1.45,
    color = "0 0 0",
    spaceAfter = 10,
  } = options;

  const heightNeeded = lines.length * leading + spaceAfter;
  ensureSpace(heightNeeded);

  const startX = marginX + indent;
  currentPage.push(`${color} rg`);
  currentPage.push("BT");
  currentPage.push(`/${font} ${fontSize} Tf`);
  currentPage.push(`${leading} TL`);
  currentPage.push(`1 0 0 1 ${startX} ${cursorY} Tm`);

  lines.forEach((line, index) => {
    if (index > 0) {
      currentPage.push("T*");
    }

    currentPage.push(`(${escapePdfText(line)}) Tj`);
  });

  currentPage.push("ET");
  cursorY -= heightNeeded;
}

function addRule() {
  ensureSpace(12);
  currentPage.push("0.85 0.87 0.9 RG");
  currentPage.push("1 w");
  currentPage.push(`${marginX} ${cursorY + 4} m ${pageWidth - marginX} ${cursorY + 4} l S`);
  cursorY -= 12;
}

for (const block of blocks) {
  if (block.type === "title") {
    addTextBlock(wrapText(block.text, 22, contentWidth), {
      font: "F2",
      fontSize: 22,
      leading: 28,
      color: "0.09 0.17 0.33",
      spaceAfter: 12,
    });
    continue;
  }

  if (block.type === "section") {
    addTextBlock(wrapText(block.text, 16, contentWidth), {
      font: "F2",
      fontSize: 16,
      leading: 22,
      color: "0.09 0.17 0.33",
      spaceAfter: 2,
    });
    addRule();
    continue;
  }

  if (block.type === "subsection") {
    addTextBlock(wrapText(block.text, 12, contentWidth), {
      font: "F2",
      fontSize: 12,
      leading: 17,
      color: "0.15 0.15 0.15",
      spaceAfter: 4,
    });
    continue;
  }

  if (block.type === "paragraph") {
    addTextBlock(wrapText(block.text, 11, contentWidth), {
      font: "F1",
      fontSize: 11,
      leading: 16,
      color: "0.12 0.12 0.12",
      spaceAfter: 8,
    });
    continue;
  }

  if (block.type === "bullet") {
    const wrapped = wrapText(`- ${block.text}`, 11, contentWidth - 14);
    addTextBlock(wrapped, {
      font: "F1",
      fontSize: 11,
      indent: 14,
      leading: 16,
      color: "0.12 0.12 0.12",
      spaceAfter: 2,
    });
    continue;
  }

  if (block.type === "code") {
    const wrappedLines = block.lines.flatMap((line) =>
      wrapCodeLine(line, 9.5, contentWidth - 16),
    );

    const leading = 13;
    const heightNeeded = wrappedLines.length * leading + 18;
    ensureSpace(heightNeeded);

    const boxTop = cursorY + 6;
    const boxHeight = wrappedLines.length * leading + 10;
    currentPage.push("0.95 0.96 0.98 rg");
    currentPage.push(`${marginX} ${boxTop - boxHeight} ${contentWidth} ${boxHeight} re f`);
    currentPage.push("0.18 0.43 0.93 RG");
    currentPage.push("2 w");
    currentPage.push(`${marginX} ${boxTop - boxHeight} m ${marginX} ${boxTop} l S`);

    addTextBlock(wrappedLines, {
      font: "F3",
      fontSize: 9.5,
      indent: 12,
      leading,
      color: "0.15 0.18 0.22",
      spaceAfter: 12,
    });
  }
}

finishPage();

const objects = [];

function addObject(content) {
  objects.push(content);
  return objects.length;
}

const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
const pagesId = addObject("placeholder");
const fontRegularId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const fontBoldId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
const fontMonoId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>");

const pageIds = [];

for (const content of pages) {
  const stream = Buffer.from(content, "utf8");
  const contentId = addObject(`<< /Length ${stream.length} >>\nstream\n${content}\nendstream`);
  const pageId = addObject(
    `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R /F3 ${fontMonoId} 0 R >> >> /Contents ${contentId} 0 R >>`,
  );
  pageIds.push(pageId);
}

objects[pagesId - 1] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds
  .map((id) => `${id} 0 R`)
  .join(" ")}] >>`;

let pdf = "%PDF-1.4\n";
const offsets = [0];

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";

for (let i = 1; i < offsets.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}

pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, pdf, "binary");
console.log(`Created ${outputPath}`);
