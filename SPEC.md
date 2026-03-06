# KBeautySeol - Korean Skincare E-Commerce Website Specification

## 1. Project Overview

**Project Name:** KBeautySeol  
**Project Type:** Single-page E-commerce Website  
**Core Functionality:** Korean skincare product showcase with shopping cart and Telegram order integration  
**Target Users:** Beauty enthusiasts interested in authentic Korean skincare products

---

## 2. UI/UX Specification

### Layout Structure

**Header/Navigation**
- Fixed navigation bar at top
- Logo on left: "KBeautySeol" with elegant Korean-style font
- Navigation links: Home, Shop, Products, Contact
- Cart icon with badge showing item count (top right)

**Hero Section**
- Full-width banner with animated gradient background
- Main headline: "KBeautySeol – Authentic Korean Skincare"
- Subheadline with tagline
- CTA button with hover animation

**Featured Products Section**
- Section title with decorative elements
- 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Product cards with glassmorphism effect

**Trending Section**
- Horizontal scroll on mobile
- Showcase trending Korean skincare items

**Shopping Cart**
- Slide-out cart panel from right side
- Product list with quantity controls
- Subtotal and total display
- Checkout button

**Checkout Modal**
- Overlay modal with form
- Input fields: Name, Country, Telegram username
- Order summary display
- Place Order button

**Footer**
- Brand info
- Social links placeholder
- Copyright

### Visual Design

**Color Palette**
- Primary: #FFB6C1 (Pastel Pink)
- Secondary: #FFF5F5 (Soft White/Pink)
- Accent: #E8D5D5 (Soft Beige)
- Background: #FFFafa (Off-white)
- Text Primary: #4A4A4A (Dark Gray)
- Text Secondary: #8B8B8B (Medium Gray)
- Success: #98D8AA (Soft Green)
- White: #FFFFFF

**Typography**
- Logo/Headings: 'Cormorant Garamond', serif (elegant, Korean beauty feel)
- Body: 'Quicksand', sans-serif (modern, clean)
- Font sizes:
  - Logo: 28px
  - H1: 48px (hero)
  - H2: 36px (section titles)
  - H3: 20px (product names)
  - Body: 16px
  - Small: 14px

**Spacing System**
- Section padding: 80px vertical
- Container max-width: 1200px
- Card padding: 20px
- Element margins: 16px standard

**Visual Effects**
- Glassmorphism cards: rgba(255,255,255,0.7) with backdrop-blur
- Box shadows: 0 8px 32px rgba(255,182,193,0.15)
- Product hover: glow effect with pink shadow
- Smooth transitions: 0.3s ease

### Components

**Product Card**
- Image container (square, 250x250)
- Product name
- Price display
- Add to Cart button
- States: default, hover (glow + scale), active

**Cart Item**
- Small product image
- Product name
- Quantity controls (- / count / +)
- Remove button
- Line total

**Navigation**
- Transparent initially, white with shadow on scroll
- Mobile: hamburger menu with slide-in panel

**Buttons**
- Primary: Pastel pink background, white text
- Secondary: White background, pink border
- Hover: Scale up slightly, shadow increase

---

## 3. Functionality Specification

### Products Data

| ID | Name | Price |
|----|------|-------|
| 1 | Hydrating Face Mask | $10 |
| 2 | Snail Repair Cream | $18 |
| 3 | Glass Skin Serum | $22 |
| 4 | Korean Hydrating Toner | $15 |
| 5 | Collagen Sheet Mask | $8 |

### Core Features

**Shopping Cart System**
- Add products to cart (with quantity)
- Remove products from cart
- Adjust quantity (min: 1, max: 10)
- Calculate subtotal per item
- Calculate total price
- Persist cart in localStorage

**Checkout Flow**
1. User clicks "Checkout" in cart
2. Modal opens with form
3. User fills: Name, Country, Telegram username
4. User clicks "Place Order"
5. Order sent via Telegram Bot API
6. Confirmation message displayed
7. Cart cleared after successful order

**Telegram Integration**
- Bot API endpoint: https://api.telegram.org/bot{TOKEN}/sendMessage
- Format order details as message
- Handle API errors gracefully

### User Interactions

- Smooth scroll to sections on nav click
- Product card hover animations
- Add to cart: button animation + cart icon bounce
- Cart panel slide in/out
- Modal fade in/out
- Scroll reveal animations on section entry

### Animations (GSAP)

- Hero text fade-in and slide-up on load
- Product cards stagger reveal on scroll
- Smooth scroll behavior
- Cart icon pulse on add
- Button hover effects
- Modal entrance/exit

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Header is fixed and changes style on scroll
- [ ] Hero section has animated gradient background
- [ ] All 5 products displayed with images
- [ ] Product cards have hover glow effect
- [ ] Cart shows correct item count
- [ ] Checkout modal displays correctly
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1200px)

### Functional Checkpoints
- [ ] Can add product to cart
- [ ] Can remove product from cart
- [ ] Can adjust quantity
- [ ] Prices calculate correctly
- [ ] Checkout form validates required fields
- [ ] Order message formats correctly
- [ ] Confirmation message shows after checkout
- [ ] Cart persists on page refresh

### Animation Checkpoints
- [ ] Hero text animates on page load
- [ ] Products stagger animate on scroll
- [ ] Smooth transitions on all interactions
- [ ] Cart icon animates on add
- [ ] Scroll reveal works

---

## 5. Technical Implementation

**File Structure**
```
index.html - Main HTML file
styles.css - All styling
script.js - JavaScript functionality
```

**External Resources**
- GSAP: https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js
- Google Fonts: Cormorant Garamond, Quicksand
- Product images: Placeholder from picsum.photos or similar

**Browser Support**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript

