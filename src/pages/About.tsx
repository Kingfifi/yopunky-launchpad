import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold bg-gradient-to-r from-logo-blue via-logo-pink via-logo-purple to-logo-coral bg-clip-text text-transparent">
            About YoPunky
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Born from rebellion, fueled by innovation, and driven by the belief that extraordinary 
            things happen when you dare to be different.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-logo-green via-logo-blue to-logo-purple bg-clip-text text-transparent">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  YoPunky emerged from the underground tech scene, where conventional thinking 
                  goes to die and revolutionary ideas are born. We're not just another company - 
                  we're a movement of digital rebels who refuse to accept the ordinary.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our punk ethos isn't just aesthetic; it's philosophical. We challenge every 
                  assumption, question every norm, and build solutions that others wouldn't 
                  dare to imagine.
                </p>
                <Button variant="neon" size="lg">
                  Join Our Mission
                </Button>
              </div>
              <Card className="p-8 border-logo-blue/20 bg-gradient-to-br from-logo-blue/10 to-logo-pink/10">
                <h3 className="text-2xl font-bold mb-4 text-logo-blue">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To disrupt the status quo and empower creators, innovators, and rebels 
                  to build the future they envision. We're here to amplify the voices
                  that refuse to be silenced and support the ideas that change the world.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-logo-coral via-logo-yellow to-logo-green bg-clip-text text-transparent">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center border-border hover:border-logo-blue transition-colors group">
            <div className="w-16 h-16 bg-gradient-to-r from-logo-blue to-logo-purple rounded-full mx-auto mb-4 group-hover:shadow-[var(--glow-primary)] transition-shadow"></div>
            <h3 className="text-lg font-bold mb-2 text-logo-blue">Authenticity</h3>
            <p className="text-sm text-muted-foreground">
              We stay true to our roots and never compromise our rebellious spirit.
            </p>
          </Card>
          
          <Card className="p-6 text-center border-border hover:border-logo-pink transition-colors group">
            <div className="w-16 h-16 bg-gradient-to-r from-logo-pink to-logo-coral rounded-full mx-auto mb-4 group-hover:shadow-[var(--glow-secondary)] transition-shadow"></div>
            <h3 className="text-lg font-bold mb-2 text-logo-pink">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              We constantly push boundaries and explore uncharted territories.
            </p>
          </Card>
          
          <Card className="p-6 text-center border-border hover:border-logo-green transition-colors group">
            <div className="w-16 h-16 bg-gradient-to-r from-logo-green to-logo-yellow rounded-full mx-auto mb-4 group-hover:shadow-[var(--glow-accent)] transition-shadow"></div>
            <h3 className="text-lg font-bold mb-2 text-logo-green">Community</h3>
            <p className="text-sm text-muted-foreground">
              We build and support a tribe of like-minded rebels and creators.
            </p>
          </Card>
          
          <Card className="p-6 text-center border-border hover:border-logo-purple transition-colors group">
            <div className="w-16 h-16 bg-gradient-to-r from-logo-purple to-logo-blue rounded-full mx-auto mb-4 group-hover:shadow-[var(--glow-primary)] transition-shadow"></div>
            <h3 className="text-lg font-bold mb-2 text-logo-purple">Impact</h3>
            <p className="text-sm text-muted-foreground">
              Everything we do is designed to create meaningful change.
            </p>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-logo-yellow via-logo-green to-logo-blue bg-clip-text text-transparent">
            The Rebels Behind YoPunky
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're a diverse crew of designers, developers, strategists, and dreamers 
            united by our shared passion for disruption and innovation.
          </p>
          <Button variant="punk" size="lg">
            Want to Join Us?
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;