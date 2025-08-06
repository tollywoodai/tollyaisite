import { useEffect } from "react";

interface GoogleAdsenseProps {
  adSlot: string;
  style?: React.CSSProperties;
  format?: string;
  fullWidthResponsive?: boolean;
  className?: string;
}

const GoogleAdsense = ({ 
  adSlot, 
  style = { display: "block" }, 
  format = "auto",
  fullWidthResponsive = true,
  className = ""
}: GoogleAdsenseProps) => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  useEffect(() => {
    // Only initialize AdSense in production with valid publisher ID
    if (!isDevelopment && window.location.hostname !== 'localhost') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        // Silently handle AdSense errors in development
        if (!isDevelopment) {
          console.warn("AdSense initialization failed:", err);
        }
      }
    }
  }, [isDevelopment]);

  // Show placeholder in development
  if (isDevelopment || window.location.hostname === 'localhost') {
    return (
      <div 
        className={`bg-muted/20 border border-dashed border-muted-foreground/20 rounded-lg p-4 text-center ${className}`}
        style={style}
      >
        <p className="text-xs text-muted-foreground mb-1">AdSense Placeholder</p>
        <p className="text-sm font-medium">Ad Slot: {adSlot}</p>
        <p className="text-xs text-muted-foreground mt-1">Replace with your AdSense ID for production</p>
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX" // Replace with your AdSense ID
      data-ad-slot={adSlot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
};

export default GoogleAdsense;