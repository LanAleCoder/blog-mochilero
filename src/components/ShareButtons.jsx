import { useState } from 'react';

const ShareButtons = ({ url, title, description }) => {
  const [copied, setCopied] = useState(false);
  
  const shareData = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      // Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'share_click', {
          event_category: 'engagement',
          event_label: 'copy_link'
        });
      }
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const handleShare = (platform) => {
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', 'share_click', {
        event_category: 'engagement',
        event_label: platform
      });
    }
  };

  return (
    <div className="share-buttons bg-gray-50 rounded-lg p-4 my-6">
      <h4 className="font-semibold text-gray-900 mb-3 text-center">
        ¿Te fue útil? ¡Compártelo!
      </h4>
      
      <div className="flex justify-center space-x-3">
        <a
          href={shareData.facebook}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleShare('facebook')}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>📘</span>
          <span className="hidden sm:inline">Facebook</span>
        </a>
        
        <a
          href={shareData.twitter}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleShare('twitter')}
          className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
        >
          <span>🐦</span>
          <span className="hidden sm:inline">Twitter</span>
        </a>
        
        <a
          href={shareData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleShare('whatsapp')}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          <span>💬</span>
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <span>{copied ? '✅' : '📋'}</span>
          <span className="hidden sm:inline">
            {copied ? 'Copiado' : 'Copiar'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;