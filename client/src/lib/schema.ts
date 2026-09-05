export const ORGANIZATION_ID = "https://67tours.co.ke/#organization";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness"],
  "@id": ORGANIZATION_ID,
  "name": "67 Tours & Travel",
  "alternateName": "67 Tours",
  "url": "https://67tours.co.ke",
  "logo": {
    "@type": "ImageObject",
    "url": "https://67tours.co.ke/favicon.svg",
    "width": 100,
    "height": 100
  },
  "image": "https://67tours.co.ke/favicon.svg",
  "description": "Kenya-based destination management for church groups, chamas, corporate offices, schools, NGOs, safari and coast travel. Clear routing, practical standards, local coordination.",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KE",
    "addressRegion": "Nairobi"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2921,
    "longitude": 36.8219
  },
  "foundingLocation": {
    "@type": "City",
    "name": "Nairobi",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE"
    }
  }
};

export function buildBreadcrumbSchema(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.href.startsWith('http') ? item.href : 'https://67tours.co.ke' + item.href
    }))
  };
}

export function buildPlaceSchema(destination: {
  name: string;
  slug: string;
  description: string;
  lat: number;
  lng: number;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": destination.name,
    "description": destination.description,
    "url": `https://67tours.co.ke/destinations/${destination.slug}`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": destination.lat,
      "longitude": destination.lng
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "Kenya",
      "@id": "https://www.wikidata.org/wiki/Q114"
    },
    "@id": `https://67tours.co.ke/destinations/${destination.slug}#place`
  };
}

export const destinationCoords: Record<string, {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  description: string;
}> = {
  "nairobi": {
    name: "Nairobi, Kenya",
    slug: "nairobi",
    lat: -1.2921,
    lng: 36.8219,
    description: "Kenya's capital city, Jomo Kenyatta International Airport (NBO), museums, conservation organisations, urban systems, and the practical starting point for most group movements."
  },
  "maasai-mara": {
    name: "Maasai Mara National Reserve",
    slug: "maasai-mara",
    lat: -1.4825,
    lng: 35.0869,
    description: "Kenya's most visited safari reserve, wildlife concentrations, game drives, and migration timing."
  },
  "amboseli": {
    name: "Amboseli National Park",
    slug: "amboseli",
    lat: -2.7887,
    lng: 37.3906,
    description: "Elephant populations, Mount Kilimanjaro views, water systems, and a compact field setting for wildlife and conservation education."
  },
  "coast-watamu": {
    name: "Watamu Marine National Park & Reserve",
    slug: "coast-watamu",
    lat: -3.2283,
    lng: 40.0363,
    description: "Marine protected area, coral reefs, mangrove ecosystems, and coastal community field sites."
  },
  "naivasha-nakuru": {
    name: "Naivasha & Nakuru, Rift Valley Kenya",
    slug: "naivasha-nakuru",
    lat: -0.7279,
    lng: 36.4073,
    description: "Rift Valley freshwater ecosystems, Lake Naivasha, Lake Nakuru, birdlife, and geothermal energy sites."
  },
  "northern-kenya": {
    name: "Northern Kenya (Samburu, Turkana, Northern Frontier)",
    slug: "northern-kenya",
    lat: 2.3223,
    lng: 37.9062,
    description: "Remote field corridors, Turkana basin, Samburu, long-distance road movements, and limited services requiring realistic logistics planning."
  },
  "kakamega": {
    name: "Kakamega Forest & Western Kenya",
    slug: "kakamega",
    lat: 0.2827,
    lng: 34.7520,
    description: "Kenya's only tropical rainforest, forest ecology, community context, and western Kenya field access routes."
  }
};
