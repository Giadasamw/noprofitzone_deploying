import Image from "next/image";

export default function PosterBanner() {
  return (
    <section className="poster-section">
      <div className="poster-container">
        <div className="poster-image">
          <Image
            src="/banner-child.png"
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
          aspect-ratio: 16/9;
          border-radius: 24px;
          overflow: hidden;
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
            aspect-ratio: 4/3;
          }
        }
      `}</style>
    </section>
  );
}
