const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ margin: 50, size: 'LETTER' });
const outputPath = path.join(__dirname, 'RHC-Image-Prompts.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// ── COLORS & FONTS ──────────────────────────────────────────────────────────
const SLATE  = '#1d2b3e';
const ORANGE = '#a73a00';
const CREAM  = '#f5f5f0';
const GREY   = '#6b7280';
const WHITE  = '#ffffff';

// ── HELPERS ─────────────────────────────────────────────────────────────────
function pageHeader(doc) {
  doc.rect(0, 0, doc.page.width, 48).fill(SLATE);
  doc.fillColor(WHITE).fontSize(9).font('Helvetica')
     .text('RHC Site Services  ·  Gemini Image Generation Prompts', 50, 18, { align: 'left' });
  doc.fillColor(WHITE).fontSize(9)
     .text('Be-Techplus  ·  2026', 0, 18, { align: 'right', width: doc.page.width - 50 });
  doc.moveDown(0);
  doc.y = 65;
}

function sectionHeader(doc, label) {
  doc.moveDown(0.6);
  const y = doc.y;
  doc.rect(50, y, doc.page.width - 100, 22).fill(SLATE);
  doc.fillColor(WHITE).fontSize(9).font('Helvetica-Bold')
     .text(label.toUpperCase(), 58, y + 7);
  doc.y = y + 30;
}

function promptCard(doc, num, title, page, prompt) {
  const x = 50;
  const w = doc.page.width - 100;
  const startY = doc.y;

  // Check if we need a new page (leave 160pt buffer)
  if (startY + 160 > doc.page.height - 50) {
    doc.addPage();
    pageHeader(doc);
  }

  const cardY = doc.y;

  // Light background
  doc.rect(x, cardY, w, 8).fill(CREAM);

  // Number badge
  doc.rect(x, cardY, 36, 8).fill(ORANGE);
  // Draw the number on top after height is known — we'll fix height after text

  // We'll render in layers: measure text first then draw box
  // Render title line
  const titleText = title;
  const pageText   = `Source: ${page}`;

  // Estimate prompt height
  const promptLines = doc.heightOfString(prompt, { width: w - 20, fontSize: 10 });
  const cardHeight  = 14 + 16 + promptLines + 24; // top pad + title + prompt + bottom pad

  // Background card
  doc.rect(x, cardY, w, cardHeight).fill(CREAM);
  doc.rect(x, cardY, 36, cardHeight).fill(ORANGE);

  // Thin left accent
  doc.rect(x + 36, cardY, 3, cardHeight).fill('#c94800');

  // Number
  doc.fillColor(WHITE).fontSize(9).font('Helvetica-Bold')
     .text(`#${num}`, x + 4, cardY + cardHeight / 2 - 6, { width: 28, align: 'center' });

  // Title
  doc.fillColor(SLATE).fontSize(11).font('Helvetica-Bold')
     .text(titleText, x + 46, cardY + 12, { width: w - 56 });

  // Page source
  doc.fillColor(GREY).fontSize(8).font('Helvetica-Oblique')
     .text(pageText, x + 46, cardY + 26, { width: w - 56 });

  // Prompt body
  doc.fillColor(SLATE).fontSize(10).font('Helvetica')
     .text(prompt, x + 46, cardY + 42, { width: w - 56 });

  doc.y = cardY + cardHeight + 8;
}

// ── DATA ────────────────────────────────────────────────────────────────────

const STYLE_NOTE = `
VISUAL STYLE TO MATCH: Photorealistic product photography. Clean composition, professional studio or outdoor lighting. No text overlays, no logos, no branding, no watermarks. Square (1:1) or landscape (4:3) aspect ratio. High-resolution output.
`.trim();

const sections = [
  {
    label: 'Style Reference — How Existing Images Look',
    items: [],
    intro: `All generated images must match the visual language of the existing asset library:
• Restroom trailers & fencing: Pure white background, 3/4 or side-profile product render, clean studio lighting, no shadows except subtle drop shadow.
• Portable toilets: Outdoor grassy/paved setting, natural sky background (sunset or blue sky), slight 3/4 front angle, photorealistic photo.
• Shower trailers: Outdoor setting, blue sky, side-profile or slight 3/4 angle, white exterior, steps deployed, photorealistic photo.
• All images: Photorealistic, no branding, no text, no logos. Square (1:1) preferred for unit cards; landscape (4:3) accepted for trailers.`
  },
  {
    label: 'Section 1 — Homepage (Home.tsx)',
    items: [
      {
        num: 1,
        title: '40ft Conex Container — Homepage Service Card',
        page: 'Home.tsx · line 159',
        prompt: 'A large 40-foot steel shipping container (Conex box / ISO sea-can) placed on a Pacific Northwest construction job site. Corrugated Corten steel walls in weathered brown-orange or neutral grey-tan. Double swing cargo doors closed on one end. The container is positioned at a slight 3/4 angle, showing the long side and door end. Overcast grey-blue Pacific Northwest sky in background, gravel ground. No text, no logos, no branding. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 2,
        title: 'Roll-Off Bin on Planks — Homepage Service Card',
        page: 'Home.tsx · line 176',
        prompt: 'An open-top roll-off debris dumpster (approximately 20-yard size) resting on two wooden planks or timber boards laid across a residential asphalt driveway to protect the surface. Dark charcoal grey or forest green painted steel exterior. Hinged swing door on one end. The planks are clearly visible under the steel rails. Residential suburban setting, slight 3/4 front angle. Clean blue sky background. No text, no logos, no branding. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 3,
        title: 'Step 01 — Tell Us What You Need (How It Works)',
        page: 'Home.tsx · line 230',
        prompt: 'Close-up of a person\'s hands typing on a laptop keyboard, submitting a short online quote request form. The screen is blurred and shows a simple web form. Clean home office or outdoor patio setting. Warm natural daylight. The person is wearing casual professional attire. No screen text legible. No branding. Lifestyle editorial photography, photorealistic, square format (1:1).'
      },
      {
        num: 4,
        title: 'Step 02 — We Confirm & Schedule Everything (How It Works)',
        page: 'Home.tsx · line 241',
        prompt: 'A professional in a polo shirt reviewing a delivery schedule on a tablet or clipboard, sitting at a tidy office desk. Phone nearby, suggesting coordination. Warm indoor lighting. Organized, professional atmosphere. Face partially visible or shot from behind the shoulder. No text legible on screen. No branding. Lifestyle editorial photography, photorealistic, square format (1:1).'
      },
      {
        num: 5,
        title: 'Step 03 — Equipment Delivered On Time (How It Works)',
        page: 'Home.tsx · line 252',
        prompt: 'A flatbed service truck with a portable toilet or roll-off dumpster arriving at a construction site entrance or residential driveway. The driver is stepping out in a high-visibility orange vest. Blue sky background. Conveys on-time professional delivery. No company branding on the truck. No text. Editorial lifestyle photography, photorealistic, square format (1:1).'
      },
      {
        num: 6,
        title: 'Step 04 — We Handle the Pickup (How It Works)',
        page: 'Home.tsx · line 263',
        prompt: 'A service worker in a high-visibility orange or yellow vest loading or securing a portable toilet or piece of rental equipment onto a flatbed truck. The site is clean and cleared. Conveys professional, efficient pickup and removal. Outdoor setting, natural lighting. No company branding. No text. Editorial lifestyle photography, photorealistic, square format (1:1).'
      },
    ]
  },
  {
    label: 'Section 2 — Portable Toilets Page (PortableToilets.tsx)',
    items: [
      {
        num: 7,
        title: 'Deluxe Portable Toilet — Unit Card',
        page: 'PortableToilets.tsx · line 136',
        prompt: 'A single deluxe portable toilet unit with a visible integrated freshwater handwash station mounted on the exterior side — a small sink with a foot-pump or hand-pump faucet, soap dispenser, and paper towel holder. The unit body is light beige or off-white plastic. Photographed from a slight 3/4 front angle. Clean outdoor grassy or paved setting, soft natural daylight, blue sky. No text, no logos, no branding. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 8,
        title: 'ADA-Compliant Portable Toilet — Unit Card',
        page: 'PortableToilets.tsx · line 147',
        prompt: 'A single ADA-compliant accessible portable toilet unit. Visibly wider and larger than a standard porta-potty — approximately 5 feet wide. Light grey or tan plastic exterior. International wheelchair accessibility symbol (blue and white) displayed on the door. Outward-swinging wide door. Clean outdoor paved or gravel setting, natural daylight. Slight 3/4 front angle. No text beyond the standard accessibility icon. No branding. Professional product photography, photorealistic, square format (1:1).'
      },
    ]
  },
  {
    label: 'Section 3 — Restroom Trailers Page (RestroomTrailers.tsx)',
    items: [
      {
        num: 9,
        title: '2-Stall Luxury Restroom Trailer — Unit Card',
        page: 'RestroomTrailers.tsx · line 200 (trailer.photo)',
        prompt: 'A compact 2-stall luxury restroom trailer, approximately 12 feet long. White fiberglass exterior, single-axle trailer, two restroom stall doors visible from a 3/4 front angle. Each door has a restroom gender symbol. Black metal entry steps deployed on both sides. Climate control unit on the roof. Pure white background, subtle drop shadow. Professional product render or studio photography. No text, no logos, no branding. Square format (1:1), photorealistic.'
      },
      {
        num: 10,
        title: '4-Stall Luxury Restroom Trailer — Unit Card',
        page: 'RestroomTrailers.tsx · line 200 (trailer.photo)',
        prompt: 'A 4-stall luxury restroom trailer, approximately 14-15 feet long. White fiberglass exterior, single or tandem-axle trailer. Four restroom stall doors visible from a 3/4 front angle, two on each side of a center panel. Gender symbols on each door. Black metal entry steps deployed on both sides. Climate control unit on roof. Pure white background, subtle drop shadow. Professional product render or studio photography. No text, no logos, no branding. Square format (1:1), photorealistic.'
      },
    ]
  },
  {
    label: 'Section 4 — Temporary Fencing Page (TemporaryFencing.tsx)',
    items: [
      {
        num: 11,
        title: 'Post-Driven Chain Link Fencing — Unit Card',
        page: 'TemporaryFencing.tsx · line 164',
        prompt: 'Temporary post-driven chain-link security fencing. Galvanized steel chain-link mesh panels attached to steel posts driven directly into hard-packed dirt or asphalt — no base weights or feet. Approximately 6 feet tall. Multiple connected panels forming a long straight perimeter line receding into the background. Construction site dirt or gravel ground. Overcast or blue sky. Shot from a slight 3/4 angle showing the posts in the ground. No text, no logos, no branding. Professional product photography, photorealistic, square format (1:1).'
      },
    ]
  },
  {
    label: 'Section 5 — Shower Trailers Page (ShowerTrailers.tsx)',
    items: [
      {
        num: 12,
        title: '2-Stall Shower Trailer — Unit Card',
        page: 'ShowerTrailers.tsx · line 280 (unit.title)',
        prompt: 'A compact 2-stall portable shower trailer, approximately 14 feet long. White painted steel exterior. Two individual shower stall doors, each with a small round shower-head icon (circle with water drop rays). Metal entry steps deployed below each door. Propane tanks and water connections visible at the tongue (hitch end). Outdoors, blue sky, green grass or light gravel. Side profile or slight 3/4 angle. No branding, no text, no logos. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 13,
        title: '4-Stall Shower Trailer — Unit Card',
        page: 'ShowerTrailers.tsx · line 280 (unit.title)',
        prompt: 'A 4-stall portable shower trailer, approximately 15-18 feet long. White painted steel or fiberglass exterior. Four individual shower stall doors in a row, each with a round shower-head icon. Metal entry steps deployed below each door. Rooftop AC unit visible. Propane tanks at tongue. Outdoor setting, blue sky. Side profile showing all four stalls. No branding, no text, no logos. Professional product photography, photorealistic, square or landscape format (4:3).'
      },
      {
        num: 14,
        title: '6-Stall Shower Trailer — Unit Card',
        page: 'ShowerTrailers.tsx · line 280 (unit.title)',
        prompt: 'A large 6-stall portable shower trailer, approximately 24 feet long. White painted steel exterior. Six individual shower stall doors in a row, each with a round shower-head icon. Multiple sets of metal entry steps deployed. Large rooftop AC unit. Outdoor setting, blue sky background. Side profile or slight 3/4 angle showing all six stalls. No branding, no text, no logos. Professional product photography, photorealistic, landscape format (4:3).'
      },
    ]
  },
  {
    label: 'Section 6 — Storage Containers Page (StorageContainers.tsx)',
    items: [
      {
        num: 15,
        title: '10ft Storage Container — Unit Card',
        page: 'StorageContainers.tsx · line 244 (unit.title)',
        prompt: 'A compact 10-foot ISO steel shipping container (sea-can). Corrugated Corten steel walls and roof in weathered brown-orange or neutral grey-tan. Double swing cargo doors with heavy-duty bar handles on one short end. Steel lockbox hasp with a padlock. Side and door end visible from a 3/4 angle. Pure white background or clean outdoor paved setting. No text, no logos, no stickers, no markings. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 16,
        title: '20ft Storage Container — Unit Card',
        page: 'StorageContainers.tsx · line 244 (unit.title)',
        prompt: 'A standard 20-foot ISO steel shipping container. Corrugated steel walls and roof, weathered Corten steel or neutral grey-tan color. Double swing cargo doors with heavy-duty bar handles on one end. Steel lockbox hasp with a padlock. Shown from a 3/4 angle with the door end and long side visible. Pure white background or clean outdoor setting. No text, no logos, no stencil markings. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 17,
        title: '40ft Storage Container — Unit Card',
        page: 'StorageContainers.tsx · line 244 (unit.title)',
        prompt: 'A large 40-foot ISO steel shipping container. Corrugated steel walls and roof, neutral grey or weathered Corten steel color. Double swing cargo doors on the short end with heavy-duty bar handles and a lockbox hasp. The long side emphasizes the container\'s length. Slight 3/4 angle, door end visible. Pure white background or clean job-site setting. No text, no logos, no stencil markings. Professional product photography, photorealistic, landscape format (4:3).'
      },
    ]
  },
  {
    label: 'Section 7 — Roll-Off Dumpsters Page (RollOffDumpsters.tsx)',
    items: [
      {
        num: 18,
        title: '10-Yard Roll-Off Dumpster — Unit Card',
        page: 'RollOffDumpsters.tsx · line 235 (size.title)',
        prompt: 'A compact 10-yard open-top roll-off dumpster, approximately 14 feet long, 7.5 feet wide, and 3.5 feet tall. Dark charcoal grey or forest green heavy-gauge steel. Hinged swing door on one short end. Empty open top. Positioned on flat ground, slight 3/4 front angle. Pure white background or clean outdoor setting. No text, no logos, no branding, no company paint markings. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 19,
        title: '15-Yard Roll-Off Dumpster — Unit Card',
        page: 'RollOffDumpsters.tsx · line 235 (size.title)',
        prompt: 'A 15-yard open-top roll-off dumpster, approximately 16 feet long, 7.5 feet wide, and 4.5 feet tall. Dark charcoal grey or forest green heavy-gauge steel. Hinged swing door on one short end. Open top with straight walls. Slight 3/4 front angle, flat ground. Pure white background or clean outdoor setting. No text, no logos, no branding. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 20,
        title: '20-Yard Roll-Off Dumpster — Unit Card',
        page: 'RollOffDumpsters.tsx · line 235 (size.title)',
        prompt: 'A 20-yard open-top roll-off dumpster, approximately 16 feet long, 8 feet wide, and 4.5 feet tall. Dark charcoal grey or forest green heavy-gauge steel. Hinged swing door on the back short end, lockable. Empty open top with straight side walls. Slight 3/4 front angle. Outdoor paved or gravel setting. No text, no logos, no branding. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 21,
        title: '30-Yard Roll-Off Dumpster — Unit Card',
        page: 'RollOffDumpsters.tsx · line 235 (size.title)',
        prompt: 'A large 30-yard open-top roll-off dumpster, approximately 22 feet long, 8 feet wide, and 6 feet tall. Dark charcoal grey or forest green heavy-gauge steel. Prominently taller walls than smaller units. Hinged swing door on one end. Slight 3/4 angle showing the tall open top. Outdoor commercial or construction site setting, blue sky. No text, no logos, no branding. Professional product photography, photorealistic, square format (1:1).'
      },
      {
        num: 22,
        title: '40-Yard Roll-Off Dumpster — Unit Card',
        page: 'RollOffDumpsters.tsx · line 235 (size.title)',
        prompt: 'An extra-large 40-yard open-top roll-off dumpster, approximately 22 feet long, 8 feet wide, and 8 feet tall. The tallest container in the lineup with very tall straight walls. Dark charcoal grey or forest green heavy-gauge steel. Hinged swing door on one short end. Slight 3/4 angle to show full height. Outdoor commercial or demolition site background. No text, no logos, no branding. Professional product photography, photorealistic, landscape format (4:3).'
      },
    ]
  },
];

// ── RENDER ───────────────────────────────────────────────────────────────────

// Title page
doc.rect(0, 0, doc.page.width, doc.page.height).fill(SLATE);
doc.fillColor(WHITE).fontSize(28).font('Helvetica-Bold')
   .text('RHC Site Services', 50, 180, { align: 'center' });
doc.fillColor('#a73a00').fontSize(16).font('Helvetica')
   .text('Gemini Image Generation Prompts', 50, 220, { align: 'center' });
doc.fillColor(WHITE).fontSize(11).font('Helvetica')
   .text('22 prompts · 7 sections · All placeholder images', 50, 250, { align: 'center' });
doc.fillColor('#8899aa').fontSize(10).font('Helvetica')
   .text('Generated by Be-Techplus  ·  May 2026', 50, 280, { align: 'center' });

// Divider
doc.strokeColor('#a73a00').lineWidth(2)
   .moveTo(100, 315).lineTo(doc.page.width - 100, 315).stroke();

// Style guide on title page
doc.fillColor(WHITE).fontSize(12).font('Helvetica-Bold')
   .text('Universal Style Rules for All Prompts', 50, 340, { align: 'center' });
doc.fillColor('#b9c7e0').fontSize(10).font('Helvetica')
   .text(
     'Photorealistic product photography  ·  No text overlays  ·  No logos  ·  No branding\n' +
     'Square (1:1) for unit cards  ·  Landscape (4:3) for large trailers\n\n' +
     'White background style: Trailers, panel fencing\n' +
     'Outdoor setting style: Portable toilets, shower trailers, dumpsters, containers\n' +
     'Lifestyle/editorial style: How-It-Works step photos (Steps 01–04)',
     50, 370, { align: 'center', width: doc.page.width - 100 }
   );

// Start content pages
doc.addPage();
pageHeader(doc);

let promptNum = 0;
for (const section of sections) {
  if (section.items.length === 0 && section.intro) {
    // Style reference section
    sectionHeader(doc, section.label);
    doc.fillColor(SLATE).fontSize(10).font('Helvetica')
       .text(section.intro, 50, doc.y, { width: doc.page.width - 100 });
    doc.moveDown(1);
    continue;
  }
  if (section.items.length === 0) continue;

  sectionHeader(doc, section.label);

  for (const item of section.items) {
    promptCard(doc, item.num, item.title, item.page, item.prompt);
  }
}

// Final page — usage instructions
doc.addPage();
doc.rect(0, 0, doc.page.width, doc.page.height).fill(CREAM);
pageHeader(doc);

doc.fillColor(SLATE).fontSize(16).font('Helvetica-Bold')
   .text('How to Use These Prompts', 50, 85);
doc.fillColor(GREY).fontSize(10).font('Helvetica')
   .text('Paste each prompt directly into Gemini (gemini.google.com) or the Gemini API with Imagen.', 50, 110, { width: doc.page.width - 100 });

const steps = [
  ['1. Open Gemini', 'Go to gemini.google.com or use the Imagen API endpoint. Use Gemini 2.0 Flash or Imagen 3 for best results.'],
  ['2. Paste the prompt', 'Copy the full prompt text for the image you want. Do not add extra instructions — the prompts are already tuned to match the existing asset style.'],
  ['3. Evaluate the output', 'Check: (a) no visible text or logos, (b) correct aspect ratio, (c) background style matches the style note for that section, (d) subject is clearly identifiable.'],
  ['4. Regenerate if needed', 'If the first result has visible text or wrong composition, regenerate 1-2 more times. You can append "photorealistic, no text, clean background, no branding" if needed.'],
  ['5. Save with the right name', 'Save the image to src/assets/ using a descriptive kebab-case filename that matches the placeholder tag, e.g. deluxe-porta-potty.jpg, roll-off-10yd.jpg, conex-40ft.jpg'],
  ['6. Import and replace', 'In the relevant .tsx file, import the image and replace the <div className="placeholder"> block with an <img> tag — same pattern as the existing unit cards.'],
];

let y = 140;
for (const [title, body] of steps) {
  if (y + 60 > doc.page.height - 50) break;
  doc.rect(50, y, 4, 40).fill(ORANGE);
  doc.fillColor(SLATE).fontSize(11).font('Helvetica-Bold')
     .text(title, 62, y + 2, { width: doc.page.width - 112 });
  doc.fillColor(GREY).fontSize(9).font('Helvetica')
     .text(body, 62, y + 16, { width: doc.page.width - 112 });
  y += 56;
}

doc.end();
console.log(`PDF written to: ${outputPath}`);
