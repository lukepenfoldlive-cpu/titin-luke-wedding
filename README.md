# Luke & Titin — Bespoke Bilingual Wedding Website

A premium, high-end digital experience designed for the wedding celebration of **Luke Penfold** (Groom) and **Titin Mubarokah** (Bride), held at the five-star **The Anvaya Bali Beach Resort** in Kuta, Bali on **22/08/2027**.

The website features a custom **Balinese Sunset Blush & Champagne Gold** styling palette, an interactive vertical schedule, scrollytelling animations, travel advisory accordions, and a simulated live guest photo upload hub.

---

## 🌸 Key Features

1. **Bilingual Toggle & Persistence**:
   - Offers instant translation swapping between **English UK** (strictly formal, sophisticated tone) and **Indonesian** (Refined/Bahasa Halus).
   - Saves the user's selected language in `localStorage` to maintain the translated state across page transitions.

2. **Cinematic Hero Countdown**:
   - A live, ticking countdown clock on the home page tracking the remaining days, hours, minutes, and seconds until the wedding ceremony at **15:30 on August 22, 2027**.
   - Immersive parallax background scroll effect.

3. **Scrollytelling Journey**:
   - A three-chapter chronicle of the couple's journey (*'The Beginning'*, *'Two Cultures, One Heart'*, and *'The Proposal'*).
   - Features scroll-triggered reveal animations and a floating dot navigation sidebar that tracks scroll progress and enables direct jumping.

4. **The Golden Thread Itinerary**:
   - A vertical interactive timeline of the wedding day events.
   - The thread line dynamically fills with golden light based on scroll percentage. Node elements expand and glow as they enter the screen.

5. **Digital Travel Concierge**:
   - Accordion advisory panels tailored for Australian guests traveling to Bali.
   - Provides flight details, Electronic Visa on Arrival (e-VoA) requirements, and Electronic Customs Declarations (e-CD).

6. **Live Photo Hub**:
   - A mobile-responsive Masonry gallery displaying photos from the event.
   - Includes a custom upload widget supporting drag-and-drop file imports, file size/type validation, mock uploading progress bars, and state persistence in `localStorage`.

---

## 🎨 Design System

The layout is built around the **Balinese Sunset Blush & Champagne Gold** aesthetic:
* **Backgrounds**: Soft beach sand and peach gradients (`#FAF5EF` to `#F5EAE1`).
* **Text**: Dark espresso charcoal (`#2E2220`) for high-contrast readability, with muted details in warm cocoa-taupe (`#7A6663`).
* **Accents**: Balinese sunset blush rose (`#ECC7C0`) and champagne gold (`#C5A028`).
* **Glassmorphism**: Cards and panels styled with frosted white glass (`rgba(255, 255, 255, 0.55)`) and delicate gold borders (`rgba(197, 160, 40, 0.25)`).
* **Typography**: Elegant *Cormorant Garamond* (Serif) for headings and clean *Montserrat* (Sans-serif) for body text.

---

## 📂 Project Structure

```
/ (Workspace Root)
├── index.html          (Home, Countdown, and Welcome)
├── story.html          (Our Story scrollytelling)
├── itinerary.html      (The Golden Thread timeline)
├── concierge.html      (Digital travel advisory)
├── gallery.html        (Live Photo Hub and Uploads)
├── styles.css          (Shared & Page-Specific Stylesheet)
├── script.js           (Global scripts & Translation engine)
├── .gitignore          (Untracked directories & log files)
└── assets/             (Thematic sunset blush illustrations & backdrops)
```

---

## 💻 Local Development

To run the project locally, launch a lightweight HTTP server in the root folder:

### Python
```bash
python -m http.server 8000
```

### Node.js
```bash
npx http-server -p 8000
```

Once running, navigate to `http://localhost:8000` in your web browser.

---

## 🚀 Deployment

The site is configured for automatic deployment via **GitHub Pages**. Ensure your repository settings are set to build from the branch:
1. Go to **Settings > Pages**.
2. Set the Source to **Deploy from a branch**.
3. Select **`main`** and **`/ (root)`**.
4. Click **Save**.
