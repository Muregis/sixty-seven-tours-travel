import { useEffect } from 'react';
import { localBusinessSchema, buildBreadcrumbSchema } from "@/lib/schema";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
  breadcrumb?: Array<{ name: string; href: string }>;
}

export function SEO({ 
  title, 
  description, 
  canonical = 'https://67tours.co.ke', 
  ogImage = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=630&fit=crop',
  ogType = 'website',
  noindex = false,
  structuredData,
  breadcrumb
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:url', canonical);
    updateMetaTag('og:site_name', '67 Tours & Travel');
    updateMetaTag('og:type', ogType);

    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:card', 'summary_large_image');

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else if (robotsMeta) {
      robotsMeta.remove();
    }

    if (structuredData) {
      let existingScript = document.getElementById('structured-data');
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    if (breadcrumb) {
      let existingBreadcrumb = document.getElementById('breadcrumb-jsonld');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-jsonld';
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.textContent = JSON.stringify(buildBreadcrumbSchema(breadcrumb));
      document.head.appendChild(breadcrumbScript);
    }

    let existingOrg = document.getElementById('organization-jsonld');
    if (existingOrg) {
      existingOrg.remove();
    }
    const orgScript = document.createElement('script');
    orgScript.id = 'organization-jsonld';
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(orgScript);

    return () => {
      const script = document.getElementById('structured-data');
      if (script) script.remove();
      const breadcrumbScriptEl = document.getElementById('breadcrumb-jsonld');
      if (breadcrumbScriptEl) breadcrumbScriptEl.remove();
      const orgScriptEl = document.getElementById('organization-jsonld');
      if (orgScriptEl) orgScriptEl.remove();
    };
  }, [title, description, canonical, ogImage, ogType, noindex, structuredData, breadcrumb]);

  return null;
}

function updateMetaTag(property: string, content: string) {
  const attrName = property.startsWith('og:') ? 'property' : 'name';
  let meta = document.querySelector(`meta[${attrName}="${property}"]`) || 
             document.querySelector(`meta[property="${property}"]`) ||
             document.querySelector(`meta[name="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attrName, property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}
