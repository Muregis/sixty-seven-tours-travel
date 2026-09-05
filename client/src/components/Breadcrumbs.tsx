import { useEffect } from "react";
import { buildBreadcrumbSchema } from "@/lib/schema";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  useEffect(() => {
    const structuredData = buildBreadcrumbSchema(items);
    
    let existingScript = document.getElementById('breadcrumb-schema');
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.id = 'breadcrumb-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('breadcrumb-schema');
      if (script) script.remove();
    };
  }, [items]);

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => (
          <li key={item.href} className="breadcrumbs__item">
            {index > 0 && <span className="breadcrumbs__separator">/</span>}
            {index === items.length - 1 ? (
              <span className="breadcrumbs__current" aria-current="page">
                {item.name}
              </span>
            ) : (
              <a href={item.href} className="breadcrumbs__link">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}