## Portfolio for Abhijit Pawase — Cinematic Intro + Bento Site

### Act 1 — Cinematic Walk-In Intro
Plays once per session before the portfolio loads:

1. **Black cinematic stage** with subtle scanline + grain
2. **Abhijit walks toward camera from the distance** — using your uploaded photo as the face/likeness reference. I'll generate a full-body cinematic shot of you in a sharp suit walking forward (transparent background PNG) via `edit_image` so the figure can be composited over the dark stage
3. The figure scales from tiny → full-size with a subtle side-to-side stride sway and motion-blur that clears as he stops
4. **"WELCOME"** types in (mono, cyan) above the figure
5. **"ABHIJIT PAWASE"** crashes in word-by-word in giant Syne with a glitch shake
6. ~600ms hold → figure + text dissolve upward → bento portfolio fades/slides in
7. **Skip intro** button (bottom-right); reduced-motion users get a 400ms fade

### Act 2 — Bento Portfolio (Cyber-noir direction)
Black + cyan accent, Syne + Plus Jakarta + JetBrains Mono.

Tiles:
- **Hero** — name + role + animated status chip; your uploaded portrait used as the avatar
- **Status** — Google Student Ambassador
- **Skills marquee** — Python, C++, SQL, TensorFlow, PyTorch, Pandas
- **Projects** — Project Drishti, Milan Tours, Project Sarthi (generated hero images)
- **Achievements** — Build Bharat 2nd Prize, National Skating Champion, Deloitte/Google/CEH certs
- **About / Education** — Amrutvahini College, AI & Data Science
- **Contact** — email, phone, LinkedIn (mailto + external links)

### Motion (intensity 10/10)
Scroll-stagger reveals, infinite skills marquee, hover border-glow + grayscale→color image reveal, persistent scanline overlay, animated counters.

### Tech
- TanStack Start route at `/` replaces placeholder
- **Framer Motion** for intro + tile animations
- Tailwind v4 tokens in `src/styles.css`; fonts via `<link>` in `__root.tsx`
- Your uploaded photo → CDN via `lovable-assets` (used as avatar + reference for the generated walking figure)
- Generated assets: walking-figure PNG (transparent) + 3 project hero images
- SEO `head()` with title, description, OG tags

### Notes / caveats
- The walking figure is a stylized AI-generated illustration based on your photo — facial likeness is approximate, not photoreal video
- If you'd rather I just animate your portrait directly (zoom-in from far, no full body), say the word and I'll swap

### Out of scope
Backend/contact form, CMS — content is hardcoded from your resume.

Approve and I'll build it.