// Configuration for Blooamarine Portfolio
// You can replace image paths or edit text directly here!

export const siteData = {
  // Brand & Identity
  brand: {
    name: "blooamarine",
    // Replace with your own logo file in public/images/ or pass a path
    logoImage: "/images/logo.png",
    // Fallback text if logo image is not loaded
    logoText: "blooamarine",
    year: "2026",
  },

  // Hero Section
  hero: {
    // Mascot character in the hero center
    // Replace with your provided mascot photo (e.g., /images/my-mascot.png)
    mascotImage: "/images/mascot.png",
    mascotAlt: "Blooamarine Mascot",
    welcomeText: "Welcome to my portfoilo!",
    ribbonText: "blooamarine  blooamarine  blooamarine  blooamarine",
  },

  // About Me Section
  about: {
    title: "ABOUT ME",
    // Replace with your provided photo of the person
    personImage: "/images/person.png",
    personAlt: "Hani (blooamarine)",
    bio: "Hi! I'm Hani, also known as blooamarine. I'm a freelance illustrator from Indonesia who loves creating cute characters, game assets, and stylized illustrations. I have experience working with various clients on different illustration projects, adapting to their needs and bringing their ideas to life. I'm familiar with digital art software such as Krita, Procreate, and Adobe Illustrator.",
  },

  // Portfolio Section
  portfolio: {
    badgeTitle: "Let's explore my works!",
    items: [
      {
        id: "mascot-design",
        title: "Illustration & Mascot Design",
        category: "Illustration",
        thumbnail: "/images/work1.png",
        description:
          "Custom cute character design and mascot illustrations for personal branding, vtuber concepts, and commercial projects.",
        tools: ["Procreate", "Clip Studio Paint", "Photoshop"],
        client: "Personal & Commissioned Works",
      },
      {
        id: "game-asset",
        title: "2D Game Asset & Concept Art",
        category: "Game Design",
        thumbnail: "/images/work2.png",
        description:
          "Enchanting 2D environment concepts, fantasy building designs, isometric game props, and whimsical night scenes.",
        tools: ["Adobe Illustrator", "Krita", "Procreate"],
        client: "Indie Game Studios",
      },
      {
        id: "merchandise",
        title: "Merchandise",
        category: "Product Design",
        thumbnail: "/images/work3.png",
        description:
          "Merchandise design including tote bags, acrylic keychains, enamel pins, and custom apparel illustrations.",
        tools: ["Adobe Illustrator", "Procreate"],
        client: "Community Gatherings & Events",
      },
    ],
  },

  // Social Media Links
  socials: {
    title: "Find Me on Social Media!",
    instagram: "https://instagram.com/blooamarine",
    twitter: "https://x.com/blooamarine",
    pinterest: "https://pinterest.com/blooamarine",
    whatsapp: "https://wa.me/6281234567890?text=Hello%20Hani!%20I%20love%20your%20portfolio.",
    whatsappLabel: "Contact me!",
  },

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],

  // Footer Navigation
  footer: {
    pages: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Portofolio", href: "#portfolio" },
    ],
    contact: [
      { label: "Whatsapp", href: "https://wa.me/6281234567890" },
      { label: "Instagram", href: "https://instagram.com/blooamarine" },
    ],
  },
};
