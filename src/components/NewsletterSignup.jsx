import { useState } from 'react';

const NewsletterSignup = ({ title = "¿Te gustó esta guía?", inline = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Aquí integrarías con tu servicio de email (ConvertKit, Mailchimp, etc.)
      // Por ahora simulamos el proceso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('¡Gracias! Revisa tu email para confirmar la suscripción.');
      setEmail('');
      
      // Google Analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', 'newsletter_signup', {
          event_category: 'engagement',
          event_label: 'newsletter_form'
        });
      }
      
    } catch (error) {
      setStatus('error');
      setMessage('Hubo un error. Por favor intenta de nuevo.');
    }
  };

  const containerClass = inline 
    ? "bg-green-50 border border-green-200 rounded-lg p-4"
    : "bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-6";

  return (
    <div className={`newsletter-signup ${containerClass} my-6`}>
      <div className="text-center mb-4">
        <h3 className={`text-lg font-semibold mb-2 ${inline ? 'text-gray-900' : 'text-white'}`}>
          {title}
        </h3>
        <p className={`text-sm ${inline ? 'text-gray-600' : 'text-green-100'}`}>
          Recibe guías exclusivas, consejos locales y ofertas especiales
        </p>
      </div>
      
      {status === 'success' ? (
        <div className="text-center">
          <div className="text-2xl mb-2">✅</div>
          <p className={inline ? 'text-green-700' : 'text-white'}>{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            disabled={status === 'loading'}
            className={`flex-1 px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none disabled:opacity-50 ${
              inline 
                ? 'border border-gray-300 text-gray-900' 
                : 'text-gray-900'
            }`}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-wait flex items-center justify-center"
          >
            {status === 'loading' ? (
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
            ) : (
              'Suscribirse Gratis'
            )}
          </button>
        </form>
      )}
      
      {status === 'error' && (
        <p className="text-center text-red-300 text-sm mt-2">{message}</p>
      )}
      
      <p className={`text-xs text-center mt-3 ${inline ? 'text-gray-500' : 'text-green-200'}`}>
        Sin spam. Cancela cuando quieras.
      </p>
    </div>
  );
};

export default NewsletterSignup;