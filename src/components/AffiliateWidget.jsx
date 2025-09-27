import { useState } from 'react';

const AffiliateWidget = ({ type = 'accommodation', destination = '', postSlug = '' }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Enlaces de afiliados - actualizar con tus IDs reales
  const affiliateLinks = {
    booking: {
      baseUrl: 'https://www.booking.com',
      affiliateId: 'TU_BOOKING_AID', // Cambiar cuando tengas el ID
      trackingParam: 'aid'
    },
    airbnb: {
      baseUrl: 'https://www.airbnb.com',
      affiliateId: 'TU_AIRBNB_ID', // Cambiar cuando tengas el ID  
      trackingParam: 'ref'
    },
    amazon: {
      baseUrl: 'https://amazon.com',
      affiliateId: 'TU_AMAZON_TAG', // Cambiar cuando tengas el tag
      trackingParam: 'tag'
    }
  };

  const generateAffiliateLink = (platform, path, params = {}) => {
    const affiliate = affiliateLinks[platform];
    const url = new URL(path, affiliate.baseUrl);
    
    // Agregar ID de afiliado
    url.searchParams.set(affiliate.trackingParam, affiliate.affiliateId);
    
    // Agregar parámetros personalizados
    Object.keys(params).forEach(key => {
      url.searchParams.set(key, params[key]);
    });
    
    // Agregar tracking interno
    url.searchParams.set('utm_source', 'guatemala_mochilero');
    url.searchParams.set('utm_medium', 'afiliado');
    url.searchParams.set('utm_campaign', platform);
    
    return url.toString();
  };

  const trackClick = (platform, linkType) => {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'affiliate_click', {
        event_category: 'monetization',
        event_label: `${platform}_${linkType}`,
        custom_parameter_1: postSlug
      });
    }
    
    // Tracking interno
    console.log(`Clic en afiliado: ${platform} - ${linkType} - ${postSlug}`);
  };

  const getWidgetContent = () => {
    switch (type) {
      case 'accommodation':
        return {
          title: `Encuentra Alojamiento en ${destination}`,
          description: 'Reserva tu estadía y apoya este blog sin costo extra:',
          links: [
            {
              platform: 'booking',
              text: 'Hoteles y Pensiones',
              icon: '🏨',
              url: generateAffiliateLink('booking', '/searchresults.html', { 
                ss: destination,
                utm_content: 'hotel_search'
              })
            },
            {
              platform: 'airbnb', 
              text: 'Apartamentos y Casas',
              icon: '🏠',
              url: generateAffiliateLink('airbnb', `/s/${encodeURIComponent(destination)}`, {
                utm_content: 'airbnb_search'
              })
            }
          ]
        };
      
      case 'gear':
        return {
          title: 'Equipo Recomendado para Mochileros',
          description: 'Gear que uso y recomiendo para Guatemala:',
          links: [
            {
              platform: 'amazon',
              text: 'Mochilas de Viaje',
              icon: '🎒',
              url: generateAffiliateLink('amazon', '/s', { 
                k: 'mochila viaje 40L',
                utm_content: 'backpack_gear'
              })
            },
            {
              platform: 'amazon',
              text: 'Purificación de Agua', 
              icon: '💧',
              url: generateAffiliateLink('amazon', '/s', { 
                k: 'purificador agua viaje',
                utm_content: 'water_gear'
              })
            }
          ]
        };
      
      default:
        return {
          title: 'Enlaces Útiles',
          description: 'Recursos recomendados:',
          links: []
        };
    }
  };

  const handleLinkClick = (link) => {
    setIsLoading(true);
    trackClick(link.platform, type);
    
    // Simular loading para mejor UX
    setTimeout(() => {
      setIsLoading(false);
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }, 300);
  };

  const content = getWidgetContent();

  return (
    <div className="affiliate-widget bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6 my-6">
      <div className="widget-header mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{content.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{content.description}</p>
      </div>
      
      <div className="grid gap-3">
        {content.links.map((link, index) => (
          <button
            key={index}
            onClick={() => handleLinkClick(link)}
            disabled={isLoading}
            className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-wait group"
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{link.icon}</span>
              <span className="font-medium text-gray-900">{link.text}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              {isLoading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-green-500 border-t-transparent"></div>
              ) : (
                <>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    {link.platform}
                  </span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </>
              )}
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-green-200">
        <p className="text-xs text-gray-500 text-center">
          * Enlaces de afiliados - Gano una pequeña comisión sin costo extra para ti
        </p>
      </div>
    </div>
  );
};

export default AffiliateWidget;