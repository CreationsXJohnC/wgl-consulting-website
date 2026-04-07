# WGL Consulting Website — Revision 03
## Date: April 7, 2026
## Status: Send to Claude Code for implementation

---

## Change Required

### 1. Dr. Pesos Character Images — Background Fix
The two Dr. Pesos character images have black backgrounds built into the PNG files themselves. They were designed to display on dark backgrounds. Now that the Product Line section has a white background, the black PNG backgrounds look out of place.

**Fix:** Wrap each character image (`Dr. Pesos GreenTee notext.png` and `Dr. Pesos PeaceSign notext.png`) in a container with a **black background**. This way the images display exactly as they were originally — the black background of the image blends into the container, and the character artwork stands out correctly regardless of the section background color behind it.

- The container can be a rounded card, a square frame, or a clean dark tile — whatever fits the layout best
- The white Product Line section background stays white
- Only the image containers for these two specific character images get the black background treatment

---

**After implementing this change, deploy an updated Vercel preview link for review.**
