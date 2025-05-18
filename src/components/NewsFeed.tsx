
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Newspaper } from "lucide-react";

// Mock data for news items
const fetchNewsItems = async () => {
  // In a real application, this would be an API call
  return [
    {
      id: 1,
      title: "New Tech Hub Opening in Downtown Orlando",
      summary: "A new 50,000 square foot technology center will open next month, offering co-working and innovation space for local startups.",
      date: "2025-05-15",
      source: "Orlando Business Journal",
      url: "https://example.com/tech-hub",
    },
    {
      id: 2,
      title: "UCF Receives $5M Grant for Quantum Computing Research",
      summary: "The University of Central Florida has been awarded a significant grant to advance its quantum computing research program.",
      date: "2025-05-14",
      source: "Orlando Sentinel",
      url: "https://example.com/ucf-grant",
    },
    {
      id: 3,
      title: "Local Tech Startup Raises $10M in Series A Funding",
      summary: "An Orlando-based AI startup has secured significant funding to expand its operations and hiring across Central Florida.",
      date: "2025-05-12",
      source: "Florida Tech Today",
      url: "https://example.com/startup-funding",
    },
    {
      id: 4,
      title: "Lake Nona's Medical City Expands Digital Health Initiative",
      summary: "The growing medical innovation district is launching a new program focused on healthcare technology and digital wellness solutions.",
      date: "2025-05-10",
      source: "Orlando Health News",
      url: "https://example.com/lake-nona",
    },
  ];
};

const NewsFeed = () => {
  const { data: newsItems = [], isLoading, error } = useQuery({
    queryKey: ["newsItems"],
    queryFn: fetchNewsItems,
  });

  if (isLoading) {
    return <div className="text-center py-8">Loading news items...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error loading news items. Please try again later.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {newsItems.map((item) => (
        <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center gap-2">
              <Newspaper className="h-5 w-5" />
              <span>{item.title}</span>
            </CardTitle>
            <CardDescription>
              {new Date(item.date).toLocaleDateString()} • {item.source}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4">{item.summary}</p>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Read full story
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsFeed;
