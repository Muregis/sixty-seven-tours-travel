// Design note: Field Notes Modernism — editorial hierarchy, operational clarity, limestone paper, ink green, and waypoint orange.

export const imageUrls = {
  hero: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=600&fit=crop",
  church: "https://images.unsplash.com/photo-1548625361-ec8a9c47267a?w=800&h=600&fit=crop",
  chama: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
  corporate: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  education: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
  ngo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
  safari: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
  mark: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=64&h=64&fit=crop",
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
  nairobi: {
    title: "Nairobi Guide | Kenya Programme Hub | 67 Tours",
    description: "Nairobi as church, chama, corporate, education and NGO hub: museums, conservation organisations, urban systems, retreat centres, and practical starting point for Kenya programmes.",
  },
  maasaiMara: {
    title: "Maasai Mara Guide | Safari & Education | 67 Tours",
    description: "Maasai Mara safari planning: wildlife viewing, migration timing, access options, and programme relevance for church groups, chamas, corporate groups, schools, and NGOs.",
  },
  amboseli: {
    title: "Amboseli Guide | Wildlife & Kilimanjaro | 67 Tours",
    description: "Amboseli safari and education: elephant populations, Kilimanjaro views, compact park size, and practical route planning for church groups, chamas, corporate groups, schools, and NGOs.",
  },
  coastWatamu: {
    title: "Watamu Coast Guide | Marine & Education | 67 Tours",
    description: "Watamu marine park, coastal education, mangrove ecosystems, and practical planning for coastal programmes and leisure travel for church groups, chamas, corporate groups, schools, and NGOs.",
  },
  naivashaNakuru: {
    title: "Naivasha & Nakuru Guide | Rift Valley | 67 Tours",
    description: "Rift Valley destinations: freshwater ecology, geothermal energy, birdlife, and practical access for church groups, chamas, corporate groups, education groups, NGOs, and safari travellers.",
  },
  northernKenya: {
    title: "Northern Kenya Guide | Field Logistics | 67 Tours",
    description: "Northern Kenya and Turkana field logistics: remote access, vehicle planning, fuel and communication for church groups, chamas, corporate groups, schools, NGOs, and safari travellers.",
  },
  kakamega: {
    title: "Kakamega Guide | Western Kenya | 67 Tours",
    description: "Kakamega forest ecology, western Kenya community context, and education programme planning for forest and community studies for church groups, chamas, corporate groups, schools, and NGOs.",
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
