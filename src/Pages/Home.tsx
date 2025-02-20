import ProductCatalog from "../Components/Card";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import LatestWorks from "../Components/LatestWorks";
import Footer from "../Components/Footer";
import Contact from "../Pages/Contact";
export default function Home() {

    const products = [
        {
          imageSrc: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&q=80&w=300&h=300",
          title: "Aluminum Sheet",
          description: "Quality Germany Aluminum Sheet",
        },
        {
          imageSrc: "https://images.unsplash.com/photo-1611288875785-f62fb9b044a7?auto=format&fit=crop&q=80&w=300&h=300",
          title: "Aluminum Sheet",
          description: "Quality Germany Aluminum Sheet",
        },
        {
          imageSrc: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=300&h=300",
          title: "Aluminum Sheet",
          description: "Quality Germany Aluminum Sheet",
        },
      ];
    
      const featuredProduct = {
        imageSrc: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?auto=format&fit=crop&q=80&w=1200&h=800",
        title: "Aluminum Sheet",
        material: "Aluminum",
        dimensions: "W 86.61 in × D 41.34 in × H 29.53 in",
        price: "1,200 ETB",
      };

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
          src: "https://images.unsplash.com/photo-1614159102354-a56945099f9c?auto=format&fit=crop&q=80&w=600&h=400",
          alt: "Glass facade",
        },
        {
          src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600&h=400",
          alt: "Aluminum profile",
        },
      ];

    return (
      <div>
        <Contact />
        <Header />
        <Hero />
        
        <ProductCatalog products={products} featuredProduct={featuredProduct} />  
        <LatestWorks largeImages={largeImages} smallImages={smallImages} />
        < Footer />
      </div>

    );
  }