import React from 'react';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { siteData } from '../data/mockData';

const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4 transition-all duration-300"
      onClick={closeModal}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900">Contactez-nous</h2>
            <button 
              onClick={closeModal}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <p className="text-gray-600 mb-8">
            Nous sommes à votre disposition pour toute question concernant votre futur séjour.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#8B572A]/10 rounded-lg">
                <MapPin className="w-5 h-5 text-[#8B572A]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Adresse</p>
                <p className="text-gray-600">{siteData.general.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#8B572A]/10 rounded-lg">
                <Phone className="w-5 h-5 text-[#8B572A]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Téléphone</p>
                <a 
                  href={`tel:${siteData.general.phone.replace(/\s/g, '')}`} 
                  className="text-gray-600 hover:text-[#8B572A] transition-colors"
                >
                  {siteData.general.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#8B572A]/10 rounded-lg">
                <Mail className="w-5 h-5 text-[#8B572A]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a 
                  href={`mailto:${siteData.general.email}`} 
                  className="text-gray-600 hover:text-[#8B572A] transition-colors"
                >
                  {siteData.general.email}
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="w-full mt-8 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
