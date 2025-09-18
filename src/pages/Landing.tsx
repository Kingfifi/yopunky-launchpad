import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-punk.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="mb-6 text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Welcome to YoPunky
          </h1>
          <p className="mb-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            Breaking boundaries with bold design and rebellious innovation. 
            We're not just different - we're revolutionary.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="punk" size="lg">
              Join the Revolution
            </Button>
            <Button variant="neon" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Why Choose YoPunky?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 border-border hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg mb-4 group-hover:shadow-[var(--glow-primary)] transition-shadow"></div>
            <h3 className="text-xl font-bold mb-3 text-primary">Bold Innovation</h3>
            <p className="text-muted-foreground">
              We push the limits of what's possible, creating solutions that challenge the status quo.
            </p>
          </Card>
          
          <Card className="p-6 border-border hover:border-secondary transition-colors group">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg mb-4 group-hover:shadow-[var(--glow-secondary)] transition-shadow"></div>
            <h3 className="text-xl font-bold mb-3 text-secondary">Rebellious Spirit</h3>
            <p className="text-muted-foreground">
              Our punk ethos drives us to question everything and build something extraordinary.
            </p>
          </Card>
          
          <Card className="p-6 border-border hover:border-accent transition-colors group">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg mb-4 group-hover:shadow-[var(--glow-accent)] transition-shadow"></div>
            <h3 className="text-xl font-bold mb-3 text-accent">Electric Results</h3>
            <p className="text-muted-foreground">
              Experience the energy and power of our cutting-edge solutions.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Go Punk?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the movement that's redefining what's possible. Let's create something amazing together.
          </p>
          <Button variant="punk" size="lg">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;