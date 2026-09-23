"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given/declined
    const consent = localStorage.getItem("ishan_cookie_consent");
    if (!consent) {
      // If no consent found, show the banner after 1s
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ishan_cookie_consent", "accepted");
    setIsVisible(false);
    
    // If GA4 is implemented in the future, trigger analytics consent grant here
    // window.gtag?.('consent', 'update', {
    //   'analytics_storage': 'granted'
    // });
  };

  const handleDecline = () => {
    localStorage.setItem("ishan_cookie_consent", "declined");
    setIsVisible(false);
    
    // If GA4 is implemented in the future, keep analytics consent denied
    // window.gtag?.('consent', 'update', {
    //   'analytics_storage': 'denied'
    // });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-5 left-5 right-5 md:max-w-[480px] md:right-auto z-[9999]"
          style={{
            background: "rgba(30, 15, 5, 0.96)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(201, 168, 76, 0.25)",
            borderRadius: "16px",
            padding: "20px 24px",
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Close Icon */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 text-white/50 hover:text-white/80 transition-colors"
            aria-label="Close cookie banner"
          >
            <X size={14} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2">
            <Cookie size={18} className="text-[#C9A84C]" />
            <h3
              className="m-0 font-forum text-white tracking-wide"
              style={{ fontSize: "15px", fontWeight: 500 }}
            >
              We value your privacy
            </h3>
          </div>

          {/* Body */}
          <p
            className="font-sans font-light"
            style={{
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.65)",
              lineHeight: 1.6,
              margin: "10px 0 16px",
            }}
          >
            We use cookies to enhance your browsing experience and analyse site traffic. By clicking Accept, you consent to our use of cookies.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-3">
            <button
              onClick={handleAccept}
              className="transition-colors uppercase tracking-widest font-sans"
              style={{
                background: "#9C3F00",
                color: "white",
                padding: "8px 20px",
                borderRadius: "8px",
                fontSize: "11px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C9A84C";
                e.currentTarget.style.color = "#1C0F08";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#9C3F00";
                e.currentTarget.style.color = "white";
              }}
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="transition-colors uppercase tracking-widest font-sans"
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "rgba(255, 255, 255, 0.7)",
                padding: "8px 20px",
                borderRadius: "8px",
                fontSize: "11px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
