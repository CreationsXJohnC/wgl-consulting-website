# WGL Consulting Website — Revision 05
## Date: April 7, 2026
## Status: Send to Claude Code for implementation

---

## Changes Required

### 1. About Page — FAA Part 107 Icon Fix
The FAA Part 107 Certified icon in the Background & Credentials section is not displaying correctly after the background color change to white. The icon is likely dark or transparent and is not visible against the white background.

**Fix:** Ensure the FAA Part 107 icon renders clearly and visibly on a white background. Apply the same approach used to fix the other icons or use an appropriate color/fill so it is fully visible. It should match the visual style of the other credential icons on the same page.

---

### 2. About Page — Ori Ecosystem Section: Swap Subsection Order
In the Broader Vision / Ori Ecosystem section on the About page, swap the positions of the Ori App and Ori Corp subsections.

**Current order:** WGL Consulting → Ori App → Ori Corp
**New order:** WGL Consulting → Ori Corp → Ori App

Do not change any content within either subsection — only their placement on the page switches.

---

### 3. Global — Light and Dark Mode Compatibility
The entire website must display correctly regardless of whether the user's device is set to light mode or dark mode. Currently the site was designed for a specific background and some elements break on dark mode system settings.

**Fix:** Explicitly lock all background colors, text colors, card colors, and icon colors so they do not inherit or shift based on the user's OS color scheme preference. Do not use `color-scheme: dark` detection that changes the design — instead, force the site to always render in its designed state (white section backgrounds, black navbar, green accents, white text on dark surfaces, dark text on light surfaces) regardless of the device setting.

Specifically:
- All white background sections must stay white in dark mode
- All black elements (navbar, dark cards) must stay black in dark mode
- All text colors must remain as designed — dark text on white backgrounds, white text on dark backgrounds
- No element should invert, shift, or become invisible based on the device's light or dark mode preference
- Icons, logos, and images must remain fully visible in both modes
- Form fields, buttons, and cards must maintain their designed appearance in both modes

The simplest implementation is to set `color-scheme: light` on the root so the browser does not apply any automatic dark mode overrides, and then explicitly define all colors rather than relying on browser defaults.

---

**After implementing these changes, deploy an updated Vercel preview link for review.**
