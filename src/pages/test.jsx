import Header from './components/Header/Header';
import Hero from './components/Hero';
import FeaturedArticle from './components/FeaturedArticle';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer/Footer';
import Preloader from "./components/Preloader/Preloader";
import { usePreloader } from "./hooks/usePreloader";

function App() {
  const isLoading = usePreloader();

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12 flex-1">
        <FeaturedArticle />
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <button className="text-red-500 hover:text-red-600">
              See all →
            </button>
          </div>
          <NewsGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
