import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MaPrimeAdapt Monte-Escalier",
    "description": "Service d'installation de monte-escaliers avec financement par MaPrimeAdapt'. Des aides jusqu'à 22 000 € pour améliorer votre autonomie à domicile.",
    "url": "https://votre-domaine.fr",
    "telephone": "+33-X-XX-XX-XX-XX",
    "priceRange": "€€",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "serviceType": "Installation de monte-escaliers"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Installation de Monte-Escalier",
    "provider": {
      "@type": "Organization",
      "name": "MaPrimeAdapt Monte-Escalier"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Monte-Escalier",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation Monte-Escalier Droit",
            "description": "Installation professionnelle de monte-escalier pour escaliers droits"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Installation Monte-Escalier Tournant",
            "description": "Installation professionnelle de monte-escalier pour escaliers tournants ou courbes"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Qu'est-ce que MaPrimeAdapt' ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaPrimeAdapt' est une aide de l'État qui permet de financer jusqu'à 22 000 € pour l'installation d'un monte-escalier et l'adaptation de votre logement afin d'améliorer votre autonomie à domicile."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le montant de l'aide MaPrimeAdapt' ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'aide MaPrimeAdapt' peut atteindre jusqu'à 22 000 € selon votre situation fiscale et votre âge. Le montant exact dépend de vos revenus et de votre éligibilité."
        }
      },
      {
        "@type": "Question",
        "name": "Comment choisir son monte-escalier ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le choix d'un monte-escalier dépend de 5 critères essentiels : le type d'escalier (droit, tournant ou extérieur), le niveau de mobilité de l'utilisateur, l'espace disponible dans le logement, le budget et les aides financières disponibles, et l'installation par un professionnel qualifié. Un diagnostic gratuit à domicile permet d'identifier la solution la plus adaptée à votre situation."
        }
      },
      {
        "@type": "Question",
        "name": "Qui peut bénéficier de MaPrimeAdapt' ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MaPrimeAdapt' est accessible aux personnes en perte d'autonomie, aux seniors, et aux personnes en situation de handicap qui souhaitent adapter leur logement. Les critères d'éligibilité incluent votre situation fiscale et votre âge."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps prend l'estimation ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'estimation de votre éligibilité à MaPrimeAdapt' prend moins de 2 minutes. Il vous suffit de renseigner quelques informations sur votre escalier et votre situation."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Monte-Escalier avec Financement MaPrimeAdapt'",
    "description": "Installation de monte-escalier financée par MaPrimeAdapt'. Des aides jusqu'à 22 000 € pour améliorer votre autonomie à domicile.",
    "category": "Équipement d'accessibilité",
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "lowPrice": "0",
      "highPrice": "22000",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "22000",
        "priceCurrency": "EUR",
        "description": "Aide maximale de l'État via MaPrimeAdapt'"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
