import ProductCatalog from "../Components/Card";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import LatestWorks from "../Components/LatestWorks";
import Footer from "../Components/Footer";

export default function Home() {
  const products = [
    {
      imageSrc: "https://media.istockphoto.com/id/1341378132/photo/side-view-of-open-plan-kitchen-with-living-room-and-garden-view-from-the-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=VZq0Ccf-RncHZ07_ju54BLNcPYoYAuMF4UvCaN7KbcU=",
      title: " Windows and Doors",
      description: "Quality Germany Aluminum Sheet",
    },
    {
      imageSrc: "https://media.istockphoto.com/id/1470134784/photo/empty-room-interior-background-natural-light-interior-of-modern-and-minimalist-style-living.webp?a=1&b=1&s=612x612&w=0&k=20&c=UUMin9iCPgmL8eWHy6PKfrVwICXCiRz_c7FgTycQLhE=",
      title: "Partition Works",
      description: "Quality Germany Aluminum Sheet",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1724134969363-cbc50540a8d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWx1bWludW0lMjBIYW5kcmFpbHMlMjBhbmQlMjBHdWFyZHJhaWxzfGVufDB8fDB8fHww",
      title: "Aluminum Handrails and Guardrails",
      description: "Quality Germany Aluminum Sheet",
    },
  ];

  // Adjusted to be an array for multiple featured products
  const featuredProducts = [
    {
      imageSrc: "https://media.istockphoto.com/id/1486944922/photo/frameless-laminated-glass-railing.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZQbb-xlWZB3pj8KoaU9_JpkzGnuS9SIHRVDm-lxYtlY=",
    
    },
    {
      imageSrc: "https://media.istockphoto.com/id/1200682133/photo/balcony-railing-made-of-stainless-steel.webp?a=1&b=1&s=612x612&w=0&k=20&c=NmDR7yrblnLIpgQYuKByQ4Yri7VyVkrWX-COW28PnGA=",
     
    }
  ];

  const largeImages = [
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=600",
      alt: "Modern interior with glass walls",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800&h=600",
      alt: "Glass ceiling architecture",
    },
  ];

  const smallImages = [
    {
      src: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=600&h=400",
      alt: "Window installation",
    },
    {
      src: "https://images.unsplash.com/photo-1484825939385-ad29f324ff1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Glass facade",
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600&h=400",
      alt: "Aluminum profile",
    },
  ];

  return (
    <div>
      <Header />
      <Hero />
      <ProductCatalog products={products} featuredProducts={featuredProducts} />  
      <LatestWorks largeImages={largeImages} smallImages={smallImages} />
      <Footer />
    </div>
  );
}