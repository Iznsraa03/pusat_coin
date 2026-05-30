# SYSTEM INSTRUCTIONS
Act as an expert Full-Stack Developer. Read the project context and requirements carefully before executing. Focus strictly on the requirements, write clean code, and ensure high token efficiency.

# PROJECT CONTEXT: PUSAT COIN
**Project Type:** Landing page and game top-up conversion portal.
**Tech Stack:** React (Next.js), TypeScript, Tailwind CSS, Framer Motion (for animations).

## DESIGN SYSTEM
- **Color Palette (Strict):**
  - Primary Background: `#1E104E`
  - Secondary/Card Background: `#452E5A`
  - Primary CTA/Highlight: `#FF653F`
  - Secondary CTA/Glow/Accent: `#FFC85C`
- **UI Requirements:** Responsive (mobile-first), modern aesthetic.

## PAGE STRUCTURE & COMPONENTS
### 1. Hero Section
- **Content:** Engaging welcome narrative to drive conversions.
- **Action:** 1 CTA button (Primary CTA color) that scrolls/redirects to the Store section.

### 2. About Section
- **Content:** Paragraph describing the website's credibility.
- **Visual:** Website logo positioned alongside the text.
- **Animation:** Logo must have a continuous `floating` animation and a `glow` effect using `#FFC85C`.

### 3. Keunggulan (Advantages) Section
- **Content:** - Dynamic `count up` animation displaying total current transactions.
  - Grid of smaller cards below the counter detailing platform advantages.

### 4. FAQ Section
- **Content:** Accordion-style Frequently Asked Questions.

### 5. Footer
- **Content:** Standard footer.

### 6. Store Section (Core Logic)
- **Layout:** Grid displaying 3 specific store cards.
- **Card 1: Pusat Coin**
  - Behavior: Direct URL redirect onClick.
- **Card 2: Wolf**
  - Behavior: Open interactive Modal Form onClick.
- **Card 3: Panda**
  - Behavior: Open interactive Modal Form onClick.

## MODAL INTERACTION LOGIC (WOLF & PANDA)
When Wolf or Panda cards are clicked, open a client-side modal.
- **Form Inputs Required:** 1. `royalDreamId` (string)
  2. `phoneNumber` (string)
  3. `productSelection` (selected from PRICING DATA)
- **Submit Action:** - Validate inputs (prevent empty submissions).
  - Format a WhatsApp message string (e.g., "Order for ID: [royalDreamId], Product: [productSelection]").
  - Execute redirect to `wa.me/<store_number>?text=<url_encoded_message>`.

## PRICING DATA (ROYAL DREAM)
Use this data for the `productSelection` options inside the modal.

**Regular List:**
- 100M = 8K
- 200M = 14K
- 300M = 21K
- 400M = 28K
- 500M = 33K
- 600M = 39K
- 700M = 46K
- 800M = 55K
- 900M = 60K
- 1B = 65K

**Special Price:**
- 10B+ = @ 64K
- 30B+ = @ 63K
- 500B+ = @ 62K