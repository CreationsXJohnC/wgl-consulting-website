# WGL Consulting Website — Revision 02
## Date: April 7, 2026
## Status: Send to Claude Code for implementation

---

## Global Changes (Apply Across All Pages)

### 1. Button Hover Effects
- Apply a visible hover effect to ALL buttons across the entire site so users can clearly see that buttons are clickable.
- The hover state should be visually distinct (e.g., color shift, brightness change, or border highlight).

### 2. Contact Button in Navbar
- The Contact tab/button in the navbar should display its active state color (the color it shows when the user is on the Contact page) as the hover state when a user hovers over it from any other page.
- This makes the hover and active states match for the Contact button specifically.

---

## Home Page

### 3. Hero Section — Logo and Layout Fix
- The green Ori Company logo (`assets/logos/Ori-Badge04.png`) at the top of the hero section is being partially cut off by the navbar. Lower it so it displays fully below the navbar without being clipped.
- All text and images in the hero section must not be cut off at the top or bottom.
- Reduce the gap between the "We Grow Life (artwork).png" illustration and the "Explore Services" / "Get in Touch" buttons to bring the whole section into proper view.

### 4. Product Line Section — Background and Logo Fix
- Change the Product Line section background to **white**.
- The `Dr. Pesos Text.png` image is currently appearing inverted (white text on dark background). Since the background is now white, make sure the image renders correctly and is not color-inverted. If needed, display it as-is without any CSS filter applied.

### 5. Ecosystem Section — Ori Corp Link (Home Page)
- In the Ori Corp subsection of the Ecosystem section, replace the text "oricorpdc.com — Launching soon" with a live link styled identically to the Ori App link next to it.
- Link text: **"Ori Project Website"**
- Link URL: **https://oricompanydc.com/**

### 6. Footer — Ori Corp Link
- Replace the text "Ori Corp — Coming Soon" in the footer with a live link.
- Link text: **"Ori Project Website"**
- Link URL: **https://oricompanydc.com/**
- Style it consistently with other footer links.

---

## Services Page

### 7. Section Backgrounds
- All sections between the navbar and the footer should have a **white background**, not black. Apply this to every section on the Services page.

### 8. Ecosystem Section — Ori Corp Link (Services Page)
- Same change as item 5 above. In the Ori Corp subsection of the Ecosystem section on the Services page, replace the placeholder text with:
- Link text: **"Ori Project Website"**
- Link URL: **https://oricompanydc.com/**
- Style identically to the Ori App link next to it.

---

## About Page

### 9. Section Backgrounds
- All sections between the navbar and the footer should have a **white background**, not black. Apply this to every section on the About page.

### 10. Header Text — Two Line Split
- The header currently reads: `WGL Stands For "We Grow Life"`
- Split it into two lines:
  - Line 1: `WGL Stands For:`
  - Line 2: `"We Grow Life"`
- The two lines should be visually distinct — Line 2 can be larger, italic, or styled to stand out as the payoff of the statement.

### 11. Body Text — Spacing Fix
- In the text below the header, the word "Ori" appears in italics immediately followed by a parenthesis with no space.
- Add a space so it reads: **Ori (from Yoruba and Hebrew traditions) speaks to light, wisdom, and personal destiny.**
- There should be a clear space between the italic "Ori" and the opening parenthesis.

### 12. Our Mission Section — Color Switch
- In the subsections Grow, Educate, Comply, and Build, the header text colors need to be adjusted:
  - The **orange** color currently applied to "Build" should be moved to **"Educate"**
  - The **green** color currently applied elsewhere should be applied to **"Build"**
  - Grow and Comply: leave their current colors unchanged
  - Result: Educate = orange, Build = green

---

## Contact Page

### 13. Common Subjects — Remove Item
- Remove **"Dr. Pesos Products"** from the Common Subjects section.

### 14. Send Message Button — Conditional Hover
- The "Send Message" button should have **no hover effect** when the form above it is not completely filled out.
- The hover effect should only activate when **all form fields are filled out** (name, email, subject, and message).
- This signals to the user that the button is ready to submit only when the form is complete.

### 15. Send Message Button — Success State
- After the user fills out the form completely, clicks "Send Message", and the message is successfully sent, the button text should change to:
  **"Message Sent ✓"**
- The checkmark should appear next to the text inside the button.
- This confirms to the user that their message went through without needing a separate confirmation page.

---

## What Is NOT Changing in This Revision
- Contact page background color (keep as is — it is good)
- Overall page structure and navigation layout
- All asset files and imagery (no new files added in this revision)
- The Ori App link (https://ori-company-app.vercel.app/) — already correct from Revision 01

---

**After implementing these changes, deploy an updated Vercel preview link for review.**
