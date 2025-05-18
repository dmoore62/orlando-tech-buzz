
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Orlando Developer Conference",
    date: "2025-06-15",
    time: "9:00 AM - 5:00 PM",
    location: "Orange County Convention Center",
    description: "A full-day conference featuring talks on web development, mobile apps, and cloud technologies.",
    url: "https://example.com/odc",
  },
  {
    id: 2,
    title: "Central Florida AI Meetup",
    date: "2025-06-22",
    time: "6:30 PM - 8:30 PM",
    location: "Downtown Orlando Co-working Space",
    description: "Monthly gathering to discuss the latest in artificial intelligence and machine learning.",
    url: "https://example.com/ai-meetup",
  },
  {
    id: 3,
    title: "Cybersecurity Workshop",
    date: "2025-07-08",
    time: "1:00 PM - 4:00 PM",
    location: "UCF Downtown Campus",
    description: "Hands-on workshop focused on network security and threat prevention techniques.",
    url: "https://example.com/security",
  },
  {
    id: 4,
    title: "Virtual Reality Expo",
    date: "2025-07-20",
    time: "10:00 AM - 6:00 PM",
    location: "Seminole State College",
    description: "Experience the latest VR technologies and applications from local developers.",
    url: "https://example.com/vr-expo",
  },
  {
    id: 5,
    title: "Women in Tech Luncheon",
    date: "2025-08-05",
    time: "11:30 AM - 1:30 PM",
    location: "Lake Mary Innovation Center",
    description: "Networking event celebrating achievements and discussing opportunities for women in technology.",
    url: "https://example.com/women-tech",
  },
];

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  url: string;
};

interface EventsSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const EventsSection = ({ searchTerm, setSearchTerm }: EventsSectionProps) => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(eventsData);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (!term.trim()) {
      setFilteredEvents(eventsData);
      return;
    }
    
    const filtered = eventsData.filter(
      (event) =>
        event.title.toLowerCase().includes(term.toLowerCase()) ||
        event.description.toLowerCase().includes(term.toLowerCase()) ||
        event.location.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex gap-4 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Search for events..."
            value={searchTerm}
            onChange={handleSearch}
            className="flex-grow"
          />
          <Button variant="secondary">Search</Button>
        </div>
      </div>
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No events found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="bg-purple-50">
                <CardTitle>{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-start gap-1 text-gray-700 mb-3">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Event Details
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsSection;
