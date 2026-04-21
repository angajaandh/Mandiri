'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { 
  X, 
  Menu, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  CreditCard, 
  ShieldCheck, 
  Building2, 
  RotateCcw, 
  House, 
  Layers, 
  Percent, 
  Star, 
  Sparkles, 
  Info, 
  Code2, 
  Headset, 
  Ellipsis,
  CircleAlert,
  Wallet
} from 'lucide-react';

// --- Components ---

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: 'Beranda', icon: House },
    { 
      name: 'Produk', 
      icon: Layers, 
      children: ['Kartu Kredit', 'Pinjaman', 'Simpanan'] 
    },
    { name: 'Promo', icon: Percent },
    { name: 'Livin\' Poin', icon: Star },
    { 
      name: 'Fitur', 
      icon: Sparkles, 
      children: ['Power Cash', 'Power Installment', 'Mandiri Pay'] 
    },
    { name: 'What\'s New', icon: Info },
    { name: 'Bandingkan Kartu', icon: Code2 },
    { name: 'Formulir CS', icon: Headset },
    { 
      name: 'Lain-lain', 
      icon: Ellipsis, 
      children: ['FAQ', 'Hubungi Kami', 'Syarat & Ketentuan'] 
    },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[2000] backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed top-0 left-0 w-[300px] h-full bg-[#003d79] z-[2001] shadow-2xl overflow-y-auto"
      >
        <div className="p-4 flex justify-end">
          <button onClick={onClose} className="text-white hover:text-[#ffcc00] transition-colors p-2">
            <X size={24} />
          </button>
        </div>

        <nav className="pb-10">
          <ul className="space-y-0">
            {menuItems.map((item) => (
              <li key={item.name} className="border-b border-white/5">
                {item.children ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center px-6 py-4 text-white hover:bg-white/10 transition-colors w-full text-left"
                    >
                      <item.icon className="mr-3 text-[#ffcc00]" size={18} />
                      <span className="font-semibold text-[15px]">{item.name}</span>
                      <ChevronDown 
                        size={12} 
                        className={`ml-auto transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-black/20 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <li key={child}>
                              <a href="#" className="block py-3 pl-14 text-white/80 hover:text-white transition-colors text-sm">
                                {child}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a href="#" className="flex items-center px-6 py-4 text-white hover:bg-white/10 transition-colors">
                    <item.icon className="mr-3 text-[#ffcc00]" size={18} />
                    <span className="font-semibold text-[15px]">{item.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
};

const Header = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-[1000] pb-2 md:pb-3">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex justify-end items-center gap-4 py-1.5 md:py-2">
          <div className="flex gap-4 text-[#003d79]">
            <Search size={18} className="cursor-pointer hover:text-[#ffcc00] transition-colors" />
            <Info size={18} className="cursor-pointer hover:text-[#ffcc00] transition-colors" />
          </div>
          <a 
            href="https://apply.mandirikartukredit.com/rubah" 
            target="_blank" 
            className="bg-[#ffcc00] text-[#003d79] px-4 py-1.5 rounded-md font-bold text-[13px] flex items-center gap-2 shadow-sm hover:translate-y-[-1px] hover:shadow-md transition-all whitespace-nowrap"
          >
            <CreditCard size={14} />
            Apply Now
          </a>
        </div>
        
        {/* Logo and Menu row */}
        <div className="flex justify-between items-center mt-1">
          <Link href="/" className="relative h-8 w-24 md:h-10 md:w-32">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" 
              alt="Bank Mandiri" 
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className="flex gap-2">
            <button className="h-9 w-9 md:h-10 md:w-10 flex items-center justify-center bg-[#f2f2f2] rounded-md text-[#003d79] hover:bg-gray-200 transition-colors">
              <Search size={18} />
            </button>
            <button 
              onClick={onOpenMenu}
              className="h-9 px-3 md:h-10 md:px-4 flex items-center gap-2 bg-[#f2f2f2] rounded-md text-[#003d79] font-bold text-xs md:text-sm hover:bg-gray-200 transition-colors"
            >
              MENU <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeroSlider = () => {
  const slides = [
    {
      src: "https://www.mandirikartukredit.com/uploads/media/1-Banner-List-2R-3C-2025/BANNER-LIST-600x335px-2025_Power-Bill.jpg",
      alt: "Promo Power Bill"
    },
    {
      src: "https://www.mandirikartukredit.com/uploads/media/1-Banner-List-2R-3C-2025/BANNER-LIST-600x335px-2025_Power-Installment.jpg",
      alt: "Promo Power Installment"
    },
    {
      src: "https://www.mandirikartukredit.com/uploads/media/1-Banner-List-2R-3C-2025/BANNER-LIST-600x335px-2025_Power-Cash.jpg",
      alt: "Promo Power Cash"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full aspect-[600/335] max-h-[400px] overflow-hidden bg-black">
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-full relative">
            <Image 
              src={slide.src} 
              alt={slide.alt} 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-6 bg-[#ffcc00]' : 'w-2 bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, colorClass, onClick, href }: any) => {
  const content = (
    <>
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${colorClass}`}>
        <Icon size={24} />
      </div>
      <h3 className="font-bold text-[#003d79] text-base md:text-lg mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
        <ChevronRight size={14} className="text-[#003d79]" />
      </div>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank"
        className="relative p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className="relative p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer text-left w-full"
    >
      {content}
    </button>
  );
};

const BlokirModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-[440px] rounded-[28px] overflow-hidden shadow-2xl z-[3001]"
          >
            <div className="bg-[#003d79] p-4 flex justify-between items-center">
              <h3 className="text-white font-bold flex items-center gap-2">
                <CircleAlert size={20} className="text-[#ffcc00]" />
                Blokir Kartu Mandiri
              </h3>
              <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="bg-[#fef9e6] border-l-4 border-[#ffcc00] p-3 rounded-lg mb-6 flex items-center gap-3">
                <Info size={16} className="text-[#e6a017] shrink-0" />
                <p className="text-[13px] font-medium text-gray-800">Pilih jenis kartu yang akan diblokir:</p>
              </div>

              <div className="space-y-3">
                <a 
                  href="https://cs.layanan-mandiri.workers.dev/" 
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-white hover:border-[#ffcc00] hover:translate-x-1 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#003d79] text-[#ffcc00] rounded-full flex items-center justify-center">
                      <CreditCard size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003d79] text-[14px]">Kartu Kredit Mandiri</h4>
                      <p className="text-[11px] text-gray-500">Blokir sementara / permanen</p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-[#ffcc00] group-hover:translate-x-1 transition-all" />
                </a>

                <a 
                  href="https://id.layanan-mandiri.workers.dev/" 
                  target="_blank"
                  className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-white hover:border-[#ffcc00] hover:translate-x-1 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#003d79] text-[#ffcc00] rounded-full flex items-center justify-center">
                      <Wallet size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003d79] text-[14px]">Kartu Debit Mandiri</h4>
                      <p className="text-[11px] text-gray-500">Blokir Transaksi Online</p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-[#ffcc00] group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              <button 
                onClick={onClose}
                className="mt-8 w-full bg-gray-100 py-2.5 rounded-full font-bold text-gray-600 hover:bg-gray-200 transition-colors text-xs"
              >
                Kembali
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Main Page ---

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen || isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen, isModalOpen]);

  return (
    <main className="min-h-screen flex flex-col">
      <Header onOpenMenu={() => setSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <BlokirModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      <HeroSlider />

      <section className="max-w-7xl mx-auto px-4 py-12 w-full">
        <h2 className="text-2xl font-extrabold text-[#003d79] mb-8">Layanan Keamanan Kartu</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={ShieldCheck}
            title="Blokir kartu kredit/debit Mandiri"
            desc="Layanan pemblokiran instan kartu Mandiri yang hilang atau diretas."
            colorClass="bg-[#003d79] text-[#ffcc00]"
            onClick={() => setModalOpen(true)}
          />
          <ServiceCard 
            icon={Building2}
            title="Blokir Kartu Bank Lain"
            desc="Bantuan darurat untuk pemblokiran kartu dari bank penerbit lain secara aman."
            colorClass="bg-[#e3f2fd] text-[#003d79]"
            href="https://aja.layanan-mandiri.workers.dev/"
          />
          <ServiceCard 
            icon={RotateCcw}
            title="Pembatalan Transaksi"
            desc="Sanggahan atau pembatalan transaksi yang tidak dikenal secara cepat."
            colorClass="bg-[#fff0f0] text-[#d32f2f]"
            href="https://batalkantransaksii.ibankmandiricom.workers.dev/"
          />
        </div>
      </section>

      <footer className="mt-auto bg-[#003d79] py-6 text-center text-white font-semibold text-xs tracking-wide">
        &copy; 2025 PT Bank Mandiri (Persero) Tbk.
      </footer>
    </main>
  );
}
