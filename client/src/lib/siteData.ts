// Design note: Field Notes Modernism — editorial hierarchy, operational clarity, limestone paper, ink green, and waypoint orange.

export const imageUrls = {
  hero: "/manus-storage/67-hero-amboseli_c2fc69d9.jpg",
  education: "/manus-storage/67-education-watamu_a3b7ea47.jpg",
  ngo: "/manus-storage/67-ngo-turkana_1bca88c7.jpg",
  safari: "/manus-storage/67-safari-coast_71431b0a.jpg",
  mark: "/manus-storage/67-mark_35827bf0.png",
};

export const navItems = [
  { href: "/education", label: "Education & study tours" },
  { href: "/ngo", label: "NGO field logistics" },
  { href: "/safari-coast", label: "Safari & coast" },
  { href: "/how-we-work", label: "How we work" },
];

export const footerGroups = [
  {
    label: "For organisations",
    links: [
      { href: "/education", label: "Education & study tours" },
      { href: "/ngo", label: "NGO field logistics" },
      { href: "/how-we-work", label: "How we work" },
    ],
  },
  {
    label: "For groups",
    links: [
      { href: "/safari-coast", label: "Safari & coast" },
      { href: "/contact", label: "Request a quote" },
    ],
  },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  home: {
    title: "67 Tours & Travel | Kenya on the ground",
    description: "Kenya-based destination management for education groups, NGOs, safari and coast travel.",
  },
  education: {
    title: "Education & Study Tours in Kenya | 67 Tours",
    description: "Curriculum-led Kenya study tours with group movement, local facilitation, student standards and practical planning.",
  },
  ngo: {
    title: "NGO Field Logistics in Kenya | 67 Tours",
    description: "Multi-site field logistics in Kenya for NGO programmes, including remote access, routing, permits and communication.",
  },
  safari: {
    title: "Kenya Safari & Coast Itineraries | 67 Tours",
    description: "Operationally clear Kenya safari and coast itineraries, built around timing, transfers, stays and group needs.",
  },
  about: {
    title: "How We Work | 67 Tours & Travel Kenya",
    description: "See how 67 Tours & Travel plans and coordinates trips from the Kenya side, from brief to final movement.",
  },
  contact: {
    title: "Request a Kenya Travel Quote | 67 Tours",
    description: "Share your dates, group, route and programme needs so 67 Tours & Travel can prepare an accurate Kenya quote.",
  },
};

export const destinations = {
  education: [
    { code: "01", name: "Nairobi", note: "Museums, urban systems, conservation organisations and the practical starting point for most group movements." },
    { code: "02", name: "Naivasha & Nakuru", note: "Rift Valley geography, freshwater ecology, birdlife and manageable links between learning sites." },
    { code: "03", name: "Amboseli", note: "Wildlife, water pressure, pastoral livelihoods and conservation questions in a compact field setting." },
    { code: "04", name: "Coast / Watamu", note: "Marine systems, mangroves, coastal communities and field lessons that work across several age groups." },
    { code: "05", name: "Kakamega & western Kenya", note: "Forest ecology, community context and a different operating rhythm from the main safari circuit." },
  ],
  ngo: [
    { code: "01", name: "Northern Kenya", note: "Longer road legs, limited services and route plans that need realistic fuel, rest and communication allowances." },
    { code: "02", name: "Turkana routes", note: "Remote access, heat, road conditions and site sequencing need to be considered before vehicles are assigned." },
    { code: "03", name: "Rift Valley corridor", note: "Useful for linking Nairobi with Nakuru, Naivasha, Baringo and onward programme locations." },
    { code: "04", name: "Western Kenya", note: "Multi-site movements through Kisumu, Kakamega and surrounding counties where timing and local coordination matter." },
  ],
};
