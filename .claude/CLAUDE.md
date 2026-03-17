# Amethyst Nails & Beauty — Claude Code Instructions

## Repository access
You have full read/write access to this repository via Git.
Read, edit, and commit files directly — do not ask the user to make changes manually.
Always push to a feature branch and let the user merge via PR.
Git Bash is available on this machine if needed.

## Project overview
Static HTML site for Amethyst Nails & Beauty, 98 Trinity Street, Gainsborough, DN21 1HS.
Single-page site: `index.html` at repo root.
Supporting pages: `game.html`, `join-the-team.html`, `the-small-room.html`.
Hosted on GitHub Pages. Production domain: https://www.amethystnails.co.uk/

## Tech stack
- Tailwind CSS v3 — compiled locally, NOT loaded from CDN
- Input: `input.css` → Output: `style.css` (committed to repo)
- Lucide icons via unpkg
- Google Fonts: Playfair Display + Inter
- No build server, no Node framework, no package bundler

## CSS compilation — ALWAYS do this after HTML changes
After any change that adds or removes Tailwind classes, recompile:
```
npx tailwindcss -i input.css -o style.css --minify
```
Commit `style.css` along with `index.html` in the same commit.
If no Tailwind classes were added or removed, skip recompilation.

## Before making any fix
Read the relevant section of the file first and verify the issue exists.
Do not fix anything you cannot confirm in the source.
State what you found before making changes.

## Code principles
- Do not change visual appearance unless explicitly asked
- Do not restructure HTML unless explicitly asked
- Text/copy changes only touch text nodes — no class or structure changes
- Preserve all existing comments and section markers
- Do not introduce new dependencies

## Commit messages
Use this format:
`Set N: short description of what was done`
Example: `Set 4: copy improvements — hero, Sorcha bio, payment, vouchers`

## Business rules — do not change these without being asked
- Booking is by phone only: 01427 617211
- No online booking system, no contact forms, no WhatsApp
- Payment: cash or bank transfer only
- Phone number appears as tap-to-call: href="tel:01427617211"
- All prices are as listed in the price accordions — do not alter them

## Known placeholders — do not remove or flag as errors
- Gallery images are Pexels stock photos — to be replaced with real photos before launch
- Before/After slider images are Unsplash stock — to be replaced before launch
- Team section uses lucide user-round icons — to be replaced with real photos before launch

## Schema data (verified, do not change without instruction)
- Rating: 4.9 stars, 43 reviews
- Address: 98 Trinity Street, Gainsborough, DN21 1HS
- Phone: +441427617211
- Hours: Mon–Fri 09:00–17:30, Sat 09:00–16:00, Sun closed
- Production URL: https://www.amethystnails.co.uk/
