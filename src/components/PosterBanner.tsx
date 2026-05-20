import Image from "next/image";

export default function PosterBanner() {
  return (
    <section style={{ padding: "60px 0" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 72px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <Image
            src="/banner-child.png"
            alt="No Profit Zone - bambino che ride"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}
