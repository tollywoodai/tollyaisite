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
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

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