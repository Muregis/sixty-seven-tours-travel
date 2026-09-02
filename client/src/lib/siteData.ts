// Design note: Field Notes Modernism — editorial hierarchy, operational clarity, limestone paper, ink green, and waypoint orange.

export const imageUrls = {
  hero: "/manus-storage/67-hero-amboseli_c2fc69d9.jpg",
  church: "/manus-storage/67-church-retreat_b8e4a21d.jpg",
  chama: "/manus-storage/67-chama-meeting_c3d9e72f.jpg",
  corporate: "/manus-storage/67-corporate-teambuilding_a5b8c41e.jpg",
  education: "/manus-storage/67-education-watamu_a3b7ea47.jpg",
  ngo: "/manus-storage/67-ngo-turkana_1bca88c7.jpg",
  safari: "/manus-storage/67-safari-coast_71431b0a.jpg",
  mark: "/manus-storage/67-mark_35827bf0.png",
};

export const navItems = [
  { href: "/church-religious", label: "Church & religious groups" },
  { href: "/chamas", label: "Chamas & investment groups" },
  { href: "/corporate", label: "Corporate & office" },
  { href: "/schools", label: "Schools & education" },
  { href: "/ngo", label: "NGOs & field logistics" },
  { href: "/safari-coast", label: "Safari & coast" },
  { href: "/destinations", label: "Destinations" },
  { href: "/insights", label: "Insights" },
  { href: "/how-we-work", label: "How we work" },
];

export const footerGroups = [
  {
    label: "For organisations",
    links: [
      { href: "/church-religious", label: "Church & religious groups" },
      { href: "/chamas", label: "Chamas & investment groups" },
      { href: "/corporate", label: "Corporate & office" },
      { href: "/schools", label: "Schools & education" },
      { href: "/ngo", label: "NGOs & field logistics" },
      { href: "/how-we-work", label: "How we work" },
      { href: "/insights", label: "Insights" },
    ],
  },
  {
    label: "For groups",
    links: [
      { href: "/safari-coast", label: "Safari & coast" },
      { href: "/destinations", label: "Destinations" },
      { href: "/contact", label: "Request a quote" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "/how-we-work", label: "About us" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
      { href: "/emergency", label: "Emergency contact" },
    ],
  },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  home: {
    title: "67 Tours & Travel | Kenya on the Ground",
    description: "Kenya-based destination management for church groups, chamas, corporate offices, schools, NGOs, safari and coast travel. Clear routing, practical standards, local coordination.",
  },
  church: {
    title: "Church Retreats & Mission Trips Kenya | 67 Tours",
    description: "Kenya church group travel: retreats, conferences, pilgrimages and mission trips planned around the spiritual and practical needs of congregations and ministry teams.",
  },
  chama: {
    title: "Chama & Investment Group Travel Kenya | 67 Tours",
    description: "Transparent, accountable chama travel for Kenyan investment groups: strategic planning retreats, educational tours, member appreciation and project site visits.",
  },
  corporate: {
    title: "Corporate Team Building Kenya | 67 Tours",
    description: "Corporate group travel in Kenya: team building, end-of-year celebrations, incentive travel, conference trips and strategy retreats aligned to business purpose.",
  },
  schools: {
    title: "Kenya Study Tours for Schools | 67 Tours",
    description: "Curriculum-led Kenya study tours for schools and education groups: group movement, student standards, local facilitation and practical field planning.",
  },
  ngo: {
    title: "NGO Field Logistics Kenya | 67 Tours",
    description: "Multi-site field logistics across Kenya for NGO programmes: remote access, routing, vehicle planning and communication for field teams.",
  },
  safari: {
    title: "Kenya Safari & Coast Itineraries | 67 Tours",
    description: "Operationally clear Kenya safari and coast itineraries, built around timing, transfers, stays and group needs. Mara, Amboseli, Watamu.",
  },
  destinations: {
    title: "Kenya Destinations | 67 Tours & Travel",
    description: "Destination guides for Nairobi, Maasai Mara, Amboseli, Coast, Rift Valley and Northern Kenya. Access, seasons, and programme relevance.",
  },
  insights: {
    title: "Kenya Operations Insights | 67 Tours & Travel",
    description: "Practical articles on Kenya education planning, NGO field logistics, safari planning, and seasonal considerations for programme coordinators.",
  },
  about: {
    title: "How We Work | 67 Tours & Travel Kenya",
    description: "See how 67 Tours & Travel plans and coordinates trips from the Kenya side, from brief to final movement. Team roles and operating standards.",
  },
  faq: {
    title: "FAQ | Kenya Travel & Programme Planning | 67 Tours",
    description: "Frequently asked questions about Kenya education tours, NGO field logistics, safari planning, pricing, and operational standards.",
  },
  contact: {
    title: "Request a Kenya Travel Quote | 67 Tours",
    description: "Share your dates, group, route and programme needs so 67 Tours & Travel can prepare an accurate Kenya quote for education, NGO or safari travel.",
  },
  emergency: {
    title: "Emergency Contact | 67 Tours & Travel Kenya",
    description: "24-hour emergency contact for active 67 Tours & Travel programmes in Kenya. For urgent field coordination only.",
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
