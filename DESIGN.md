# Design guide

This site is intentionally bare. The goal is readable text, not design work.

If you are unsure what something should look like: **leave it alone.** Same size, same colors, more space.

---

## How to use this guide

You do not need design taste to ship pages here. Follow the rules, use only the tokens below, and stop when the content is clear.

| If you want to… | Do this instead |
|-----------------|-----------------|
| Make a title stand out | Use a heading (`h1`–`h6`) — same size, weight 600, spacing around it |
| Soften secondary info | Use `--muted` (or `.meta`) — never a smaller size |
| Separate sections | Add space (`--space` or `--space-lg`), not a line, card, or color |
| Emphasize a phrase | Use **bold** sparingly — not color, not caps, not size |
| Add a button / badge / tag | Write plain text or a link first. Structure only if content requires it |
| “Make it pop” | You are done. Do not add size, color, or decoration |

**Default decision:** same size → monochrome → adjust spacing → (only then) weight.

---

## Rules (in order)

1. **One font size.** Everything is `1rem` (16px). Titles, body, lists, captions, code — same size.
2. **Monochrome only.** White background, near-black text, one gray for secondary info. No accent colors.
3. **Hierarchy without size.** Use **weight** (regular vs semibold) and **spacing**, never bigger type.
4. **Spacing from tokens only.** No one-off `px`/`rem` gaps in page styles. Use the scale below.
5. **No decoration.** No shadows, no rounded cards, no gradients, no colored buttons, no icons for flair.
6. **Links look like text.** Same color as surrounding copy. Home/nav lists: underline on hover. Prose (posts): always underlined.
7. **Narrow column.** Content sits in a ~600px centered column with modest edge padding.

When something feels “off,” fix it with spacing or weight — not a new size or color.

---

## Palette

Four colors. That is the full system.

| Token       | Value     | Use                                                     |
|-------------|-----------|---------------------------------------------------------|
| `--bg`      | `#ffffff` | Page background                                         |
| `--fg`      | `#111111` | All primary text, links, and structural borders         |
| `--muted`   | `#6a6a6a` | Secondary only: dates, captions, quotes, soft rules     |
| `--code-bg` | `#f5f5f5` | Inline code and fenced code block background            |

**Do not add** a brand color, hover color, or “link blue.” Gray is allowed; hue is not.

**Only exceptions**

- Syntax highlighting inside code blocks may use light token colors (Shiki `min-light`) for readability.
- The image lightbox uses a dark scrim so the photo is readable; it is functional, not brand chrome. Prefer tokens if you touch it (`--overlay`, `--overlay-fg` in CSS).

---

## Type

| Token         | Value                   | Notes                            |
|---------------|-------------------------|----------------------------------|
| `--font`      | Inter, then system sans | Loaded via `@fontsource`         |
| `--font-mono` | System mono stack       | Code only                        |
| `--size`      | `1rem`                  | **The only font size**           |
| `--line`      | `1.6`                   | Comfortable reading              |

**Weights (exactly two)**

| Weight | Use |
|--------|-----|
| `400`  | Body, lists, paragraphs, links, meta |
| `600`  | Headings (`h1`–`h6`) only |

**Not allowed**

- Any `font-size` other than `var(--size)` (or inheriting it)
- Larger page titles or smaller footnotes/nav
- Light (200/300) or heavy (700/800) weights
- All-caps or letter-spacing tricks for hierarchy

---

## Spacing

Spacing is how this site creates hierarchy. Keep the scale small so pages feel the same.

| Token         | Value    | When to use |
|---------------|----------|-------------|
| `--space-sm`  | `0.5rem` | Tight gaps: list items, space under a heading before its first line |
| `--space`     | `1rem`   | **Default.** Between paragraphs, blocks, images, code blocks, quotes |
| `--space-lg`  | `2rem`   | Open breaks: horizontal rules, rare section breathing room |
| `--pad`       | `1.25rem`| **Page edge only** — `main` padding against the viewport. Not for content rhythm |
| `--indent`    | `1.5rem` | Prose list indent only |
| `--measure`   | `37.5rem`| Max content width (~600px) |

### Rules of thumb

1. Prefer `--space` for almost everything vertical.
2. Use `--space-sm` only when items are a tight series (list rows) or when a heading should sit close to the text it introduces.
3. Use `--space-lg` rarely — section breaks, not every heading.
4. Do not invent `0.75rem`, `1.25rem` (except `--pad` on the page shell), `20px`, etc.
5. In new CSS, write `var(--space)` / `var(--space-sm)` / `var(--space-lg)` — not raw rem values for gaps.

### Vertical rhythm (what the base CSS already does)

| Element | Spacing |
|---------|---------|
| Paragraph | `--space` below |
| Heading (global) | `--space` below |
| Heading (prose `.markdown-content`) | `--space` above, `--space-sm` below (closer to its body) |
| List item | `--space-sm` below |
| Image, figure, code block, blockquote | `--space` around / below |
| `hr` | `--space-lg` above and below |

---

## Layout

- **One column.** No sidebars, grids, or multi-column layouts.
- **Centered measure.** `main` is `max-width: var(--measure)` with `padding: var(--pad)`.
- **Images:** full width of the column, never overflow. No drop shadows or rounded corners.

---

## Elements

### Headings
Same size as body. Weight 600. Spacing from the table above — never size.

### Paragraphs
Weight 400. `--space` below each paragraph.

### Links
Inherit text color (`color: inherit` / `--fg`).

| Context | Underline |
|---------|-----------|
| Home / simple pages | None at rest; underline on `:hover` |
| Prose (`.markdown-content`) | Always on; use a small `text-underline-offset` for legibility |
| Image links | No underline |

### Lists
| Context | Style |
|---------|-------|
| Home / nav-style | No bullets (`list-style: none`) |
| Prose / markdown | Discs or numbers, indented with `--indent` |

### Secondary text
Same size, `--muted`. Prefer `.meta` or clear structure (e.g. post date under the title). **Do not shrink it.**

### Code
Still `1rem`. Monospace (`--font-mono`). Background `--code-bg`.

**In markdown posts:**

- Inline: single backticks → `` `npm run dev` ``
- Blocks: fenced triple backticks, optional language tag:

````markdown
```ts
const n = 1;
```
````

Astro highlights fenced blocks with Shiki (`min-light`). No extra plugins required. See `src/content/example.md` for a demo post.

### Blockquotes
Muted text, left border in `--fg`, padded with `--space`. No background panel.

### Horizontal rules
1px `--muted` line. Vertical margin `--space-lg` only.

### Images
Responsive within the column. No rounded corners or shadows. Lightbox is optional and functional only.

---

## What this site is not

- A place for visual experiments
- A component library (buttons, cards, chips, heroes)

If a future page needs a button, card, or tag: style it as plain text first. Only add structure if content truly requires it — still monochrome, still one size, still the spacing scale.

---

## Checklist for new pages / content

Copy this when you add or restyle a page:

- [ ] No custom `font-size` (only `var(--size)` or inherit)
- [ ] No colors outside `--bg`, `--fg`, `--muted`, `--code-bg` (plus documented lightbox/code exceptions)
- [ ] Headings are weight 600, not larger type
- [ ] Links match surrounding text color
- [ ] Gaps use `--space-sm` / `--space` / `--space-lg` / `--pad` / `--indent` only
- [ ] Content fits the single column (`--measure`)
- [ ] Hierarchy comes from weight + spacing, not size or color
- [ ] No shadows, radii, gradients, or accent UI

---

## Source of truth

Tokens and base styles live in `src/styles/global.css`.  
This file is the human guide. If CSS and this doc disagree, **fix the CSS to match these rules.**
