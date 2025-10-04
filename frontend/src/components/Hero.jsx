import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Collection of books"
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-scale-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Discover Your Next Great Read</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Share Your Literary
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              {" "}Journey
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up">
            Join thousands of book lovers sharing reviews, discovering new titles, and connecting through the stories that move us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity shadow-[var(--shadow-elegant)]">
              <BookOpen className="mr-2 h-5 w-5" />
              Start Reading Reviews
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              Join the Community
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">50K+</span>
              <span>Active Readers</span>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">200K+</span>
              <span>Book Reviews</span>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-foreground">10K+</span>
              <span>Books Listed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}
