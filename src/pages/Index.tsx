
import { useState } from "react";
import NewsFeed from "@/components/NewsFeed";
import EventsSection from "@/components/EventsSection";
import Header from "@/components/Header";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Central Florida Tech News</h2>
          <NewsFeed />
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Orlando Tech Events</h2>
          <EventsSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>
      </main>
      
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Orlando Tech Buzz</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
