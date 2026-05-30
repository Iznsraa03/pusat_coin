<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# PUSAT COIN - DEVELOPER & AGENT GUIDELINES

This document serves as the architectural blueprint and project requirements checklist for the **Pusat Coin** landing page and game top-up conversion portal. All agents and developers working on this project **must** adhere strictly to the rules, directories, and Atomic Design components specified here.

---

## 🛠 TECH STACK & ARCHITECTURE RULES

### Core Architecture: Atomic Design
To ensure scalability, modularity, and high maintainability, the project is structured strictly under the **Atomic Design** philosophy. Do not place layout blocks directly in pages; isolate everything into reusable or clear atomic hierarchies.

*   **Atoms**: Indivisible elements (Buttons, Inputs, Badges, Typography, Logo, CardBase, CountUpText).
*   **Molecules**: Combinations of atoms (FormField, StoreCard, AccordionItem, AdvantageCard).
*   **Organisms**: Complex, standalone UI sections (HeroSection, AboutSection, AdvantagesSection, FAQSection, StoreSection, OrderModal, Footer).
*   **Templates**: Page layout scaffolding (MainLayout with CSS Scroll Snap).
*   **Pages**: Page instances binding data, handling states, and rendering templates (`app/page.tsx`).

### Core Rules Checklist
- [ ] **Next.js 14+ (App Router):** Use standard typescript layouts and client/server component segregation.
- [ ] **TypeScript Interfaces:** Ensure all props, data objects, and form inputs are strictly typed under `@/types/index.ts`.
- [ ] **Tailwind CSS:** Rely on utility classes with HSL-tailored configurations and smooth transitions.
- [ ] **CSS Scroll Snap:** Utilize CSS Scroll Snap with `h-screen` sections for a sleek slides-like landing page experience on mobile and desktop. Ensure all scroll-snap CSS rules are clearly commented.
- [ ] **Mobile-First Optimization:** Carefully optimize layouts for widths `375px - 430px` (mobile viewport), while maintaining a gorgeous responsive layout on larger displays.
- [ ] **Premium Visual Design:** Use a harmonious blend of dark violet, deep card backgrounds, glowing accents, and glassmorphism. Avoid generic colors.

---

## 🎨 DESIGN SYSTEM & COLOR TOKENS

Ensure these custom colors are registered in `tailwind.config.ts` or as CSS variables in `globals.css`:

| Token Name | Hex Value | Role / Usage |
| :--- | :--- | :--- |
| **Primary Background** | `#1E104E` | Rich Deep Violet / Night sky backdrop |
| **Secondary Background** | `#452E5A` | Card & Panel background |
| **Primary CTA / Highlight** | `#FF653F` | High-conversion CTA buttons & accents |
| **Secondary CTA / Accent** | `#FFC85C` | Glow details, warnings, active borders, and gold accents |
| **Body / Primary Text** | `#FFFFFF` | Core reading text (100% white) |
| **Muted Text** | `#BCA3D0` | Paragraphs and secondary info (light pastel violet) |

### Visual Accents & Micro-Animations:
1.  **Floating Logo:** The about page logo must hover with a continuous, smooth Framer Motion `y-axis` floating motion.
2.  **Yellow Gold Glow:** Add a drop-shadow glow using `#FFC85C` around the logo and glowing cards.
3.  **Glassmorphism:** Use translucent backdrops (`bg-opacity`, `backdrop-blur`) on cards and modal panels.

---

## 📂 DIRECTORY STRUCTURE

Implement and populate folders exactly as follows:

```
pusat_coin/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Color variables, Scroll Snap global utility classes
│   ├── layout.tsx           # Global container and viewport setup
│   └── page.tsx             # Page Shell (houses main state for Modals & active section)
├── components/
│   ├── atoms/
│   │   ├── Button.tsx       # Framer-motion interactive buttons
│   │   ├── Input.tsx        # Styled form inputs
│   │   ├── Badge.tsx        # Simple text tag ("Special Price", etc.)
│   │   ├── CardBase.tsx     # Generic card wrapper with background `#452E5A`
│   │   ├── Logo.tsx         # Floating/glowing logo
│   │   ├── Typography.tsx   # Custom headings and paragraphs
│   │   └── CountUpText.tsx  # Dynamic transaction counter
│   ├── molecules/
│   │   ├── FormField.tsx    # Combines Label + Input + validation labels
│   │   ├── StoreCard.tsx    # Combines CardBase + Logo/Image + Button
│   │   ├── AccordionItem.tsx# Animated FAQ item
│   │   └── AdvantageCard.tsx# Combines Icon + Title + Body text
│   ├── organisms/
│   │   ├── HeroSection.tsx  # Hero section with primary conversion CTA
│   │   ├── AboutSection.tsx # About section with the floating glowing logo
│   │   ├── AdvantagesSection.tsx # Achievements, count-up text, and benefits grid
│   │   ├── FAQSection.tsx   # FAQ list with accordion molecules
│   │   ├── StoreSection.tsx # Store grid listing Pusat Coin, Wolf, Panda
│   │   ├── OrderModal.tsx   # Client-side validation & WA formatting form modal
│   │   └── Footer.tsx       # Bottom footer
│   └── templates/
│       └── MainLayout.tsx   # Holds CSS Scroll Snap panels and sections layout
├── src/
│   ├── data/
│   │   └── pricing.json     # Royal Dream regular and special list prices
│   └── lib/
│       └── waHelper.ts      # Function helper to format WA links (wa.me)
└── types/
    └── index.ts             # TS interfaces (Modal fields, Product pricing, etc.)
```

---

## 🧩 ATOMIC COMPONENT SPECIFICATIONS

### 1. Atoms (`components/atoms/`)

*   **Button.tsx**
    *   *Props*: `variant ('primary' | 'secondary' | 'ghost')`, `size`, `onClick`, `children`, `className`.
    *   *Styling*:
        *   `primary`: Background `#FF653F`, white text, hover hover scale `1.05`, active `0.95`.
        *   `secondary`: Background `#452E5A` or border only, accented with `#FFC85C` glow.
    *   *Animation*: Smooth `framer-motion` transition.

*   **Input.tsx**
    *   *Props*: `type`, `placeholder`, `value`, `onChange`, `error`, `className`.
    *   *Styling*: Deep purple bg (`bg-[#2a1745]`), bordered, focus ring glowing `#FFC85C` or `#FF653F`.

*   **Logo.tsx**
    *   *Animation*: Continuous infinite floating translation (`y: [-5, 5]`) using Framer Motion. Glow effect matching `#FFC85C` shadow glow (`drop-shadow-[0_0_15px_rgba(255,200,92,0.4)]`).

*   **CountUpText.tsx**
    *   *Props*: `targetNumber: number`, `durationSeconds: number`.
    *   *Logic*: Increments dynamically from 0 to the target number upon entering the viewport (uses intersection observer or `framer-motion` trigger).

---

### 2. Molecules (`components/molecules/`)

*   **StoreCard.tsx**
    *   *Props*: `title: string`, `iconUrl: string`, `description: string`, `behavior: 'redirect' | 'modal'`, `onClick: () => void`.
    *   *Design*: Outer wrapper inherits `CardBase`. Hover triggers micro-scaling and light border glows.

*   **AccordionItem.tsx**
    *   *Props*: `question: string`, `answer: string`, `isOpen: boolean`, `onToggle: () => void`.
    *   *Animation*: Framer motion `AnimatePresence` for custom height reveal.

---

### 3. Organisms (`components/organisms/`)

*   **OrderModal.tsx**
    *   *Behavior*: client-side overlay for inputting order data.
    *   *State*: Manages validation errors (`royalDreamId` empty check, `phoneNumber` format/empty check, `productSelection` empty check).
    *   *Action*: Triggers WA link generator.
    *   *Props*: `isOpen: boolean`, `onClose: () => void`, `gameType: 'Wolf' | 'Panda'`, `pricingData: PricingItem[]`.

*   **StoreSection.tsx**
    *   *Layout*: Responsive Grid (1 column on mobile, 3 columns on tablet/desktop).
    *   *Direct Link (Pusat Coin)*: Triggers direct URL redirect.
    *   *Modal Link (Wolf / Panda)*: Triggers `onOpenModal(gameType)`.

---

## ⚡️ CORE INTERACTION LOGIC: WHATSAPP REDIRECTION

When a user submits the order form inside `OrderModal` for either **Wolf** or **Panda**:

1.  **Validate inputs**:
    *   `royalDreamId` must not be blank.
    *   `phoneNumber` must not be blank and must contain numbers.
    *   `productSelection` must be a selected value from the `pricingData`.
2.  **Generate WhatsApp Message**:
    *   Format a beautiful invoice-style text:
        ```text
        Halo Pusat Coin!
        Saya ingin membeli Top Up Royal Dream:
        - Game: [Wolf / Panda]
        - ID Royal Dream: [royalDreamId]
        - No. HP: [phoneNumber]
        - Pilihan Produk: [productSelection]
        ```
    *   URL-encode the string using standard JavaScript encoding.
3.  **Perform Redirection**:
    *   Execute redirect using: `window.open("https://wa.me/<store_number>?text=" + encodedText, "_blank")`.

---

## 📈 STEP-BY-STEP IMPLEMENTATION CHECKLIST

### Phase 1: Set Up & Data Foundations
- [ ] Initialize project colors, gradients, and font families in `app/globals.css`.
- [ ] Create `types/index.ts` containing interface definitions for Product Pricing, Order Form inputs, and accordion components.
- [ ] Create `/src/data/pricing.json` containing the pricing list:
  - *Regular List*: 100M to 1B packages.
  - *Special Price*: 10B+, 30B+, 500B+ packages.
- [ ] Create `/src/lib/waHelper.ts` to cleanly format order data into WhatsApp redirect strings.

### Phase 2: Atomic Components Development
- [ ] Build **Atoms** under `components/atoms/`:
  - `Button`, `Input`, `CardBase`, `Logo` (with float/glow anims), `CountUpText`.
- [ ] Build **Molecules** under `components/molecules/`:
  - `FormField`, `StoreCard`, `AccordionItem` (FAQ collapse), `AdvantageCard`.

### Phase 3: Organisms & Section Layouts
- [ ] Build **Organisms** under `components/organisms/`:
  - `HeroSection`, `AboutSection`, `AdvantagesSection`, `FAQSection`, `StoreSection`, `Footer`.
- [ ] Build `OrderModal` and implement client-side form validation + WA link redirect.
- [ ] Build **Templates** under `components/templates/`:
  - Create `MainLayout.tsx` and configure CSS Scroll Snap panels (`snap-y snap-mandatory overflow-y-scroll h-screen`).

### Phase 4: Integration & QA
- [ ] Replace `app/page.tsx` to utilize `MainLayout` and display sections in order.
- [ ] Integrate React states in `app/page.tsx` for modal triggers.
- [ ] Perform comprehensive responsiveness checks (from 375px viewport height/width constraints up to wide desktop screens).
- [ ] Verify standard Next.js compilation, builds, and ensure code is fully error-free.

---

### ⚠️ IMPORTANT DEVELOPMENT NOTE
Always ensure the layout uses the gorgeous Dark Violet (`#1E104E`) and Purple Card (`#452E5A`) theme combined with vivid Orange (`#FF653F`) buttons and Neon Gold/Yellow (`#FFC85C`) glows as specified in the PRD, keeping it premium and stunningly mobile-first. No boring designs. Let's deliver visually outstanding code!

