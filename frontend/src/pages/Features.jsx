import { BookMarked, Users, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookMarked,
    title: "Extensive Library",
    description: "Access reviews for thousands of books across all genres. From classics to contemporary bestsellers.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Connect with fellow readers, follow reviewers, and join book clubs to discuss your favorite titles.",
  },
  {
    icon: Star,
    title: "Detailed Reviews",
    description: "Read in-depth reviews with ratings, summaries, and personal insights from passionate readers.",
  },
  {
    icon: TrendingUp,
    title: "Personalized Recommendations",
    description: "Get tailored book suggestions based on your reading history and preferences.",
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Explore Books
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to enhance your reading journey and help you discover your next favorite book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
