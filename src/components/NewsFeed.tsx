import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Newspaper } from "lucide-react";
import newsDataRaw from "../../db/news.json";

// Mock data for news items
const newsItems = newsDataRaw as Array<{
  id: number;
  title: string;
  summary: string;
  date: string;
  source: string;
  url: string;
}>;

const NewsFeed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {newsItems.map((item) => (
        <Card
          key={item.id}
          className="overflow-hidden hover:shadow-lg transition-shadow"
        >
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
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewsFeed;
