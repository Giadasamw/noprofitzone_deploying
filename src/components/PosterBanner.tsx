"use client";

import Image from "next/image";

export default function PosterBanner() {
  return (
    <section className="poster-section">
      <div className="poster-container">
        <div className="poster-image desktop-image">
          <Image
            src="/banner-child.png"
            alt="No Profit Zone - bambino che ride"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="poster-image mobile-image">
          <Image
            src="/banner-child-mobile.png"
            alt="No Profit Zone - bambino che ride"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>

      <style jsx>{`
        .poster-section {
          padding: 60px 0;
        }
        .poster-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 72px;
          display: flex;
          justify-content: center;
        }
        .poster-image {
          position: relative;
          width: 100%;
          border-radius: 24px;
          overflow: hidden;
        }
        .desktop-image {
          display: block;
          aspect-ratio: 16/9;
        }
        .mobile-image {
          display: none;
          aspect-ratio: 2/3;
        }
        
        @media (max-width: 768px) {
          .poster-section {
            padding: 40px 0;
          }
          .poster-container {
            padding: 0 24px;
          }
          .poster-image {
            border-radius: 16px;
          }
          .desktop-image {
            display: none;
          }
          .mobile-image {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}
