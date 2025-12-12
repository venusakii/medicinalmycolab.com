import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MushroomCard } from "@/components/mushroom-card"
import { SporeParticles } from "@/components/spore-particles"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Beaker, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/magical-dark-forest-with-glowing-bioluminescent-bl.jpg"
              alt="Bioluminescent mushroom forest"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-background/50" />
          </div>

          {/* Animated spore particles */}
          <SporeParticles count={30} />

          {/* Hero content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Grow the <span className="text-primary animate-bioluminescence">Future</span> of Medicine.
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                DIY fungi apothecary for homegrown wellness.
              </p>

              <p className="text-lg md:text-xl text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                Cultivate. Extract. Transform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <Button size="lg" className="group text-lg px-8 py-6">
                  Start Cultivating
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
                  <Beaker className="mr-2 h-5 w-5" />
                  Learn Extraction Science
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary/50 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-balance">
                The <span className="text-primary">Mycelial</span> Philosophy
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                MedicinalMycoLab merges traditional mycology with modern home biotechnology.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Empowering you to grow your own adaptogens,{" "}
                <span className="text-foreground font-medium">no lab coat required</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Medicinal Species */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16">
              Featured Medicinal <span className="text-primary">Species</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <MushroomCard
                name="Reishi"
                title="The Immortal Guardian"
                slug="reishi"
                icon="🍄"
                description="Ancient adaptogen known for immune support, stress reduction, and longevity. Grows on hardwood in humid conditions."
              />

              <MushroomCard
                name="Lion's Mane"
                title="The Neural Weaver"
                slug="lions-mane"
                icon="🧠"
                description="Supports cognitive function, memory, and nerve health. Contains unique compounds that promote neurogenesis."
              />

              <MushroomCard
                name="Cordyceps"
                title="The Vital Spark"
                slug="cordyceps"
                icon="⚡"
                description="Energy and performance enhancer. Supports oxygen utilization, athletic performance, and vitality."
              />
            </div>

            <div className="text-center mt-12">
              <Link href="/cultivation">
                <Button variant="outline" size="lg" className="group bg-transparent">
                  View All Species
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* DIY Cultivation Lab */}
        <section className="py-24 md:py-32 relative">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16">
              DIY <span className="text-primary">Cultivation</span> Lab
            </h2>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { stage: "Spore", icon: "🔬", color: "from-primary/20" },
                  { stage: "Mycelium", icon: "🧬", color: "from-primary/30" },
                  { stage: "Substrate", icon: "🌾", color: "from-secondary/30" },
                  { stage: "Fruiting", icon: "🍄", color: "from-secondary/40" },
                  { stage: "Extraction", icon: "⚗️", color: "from-primary/40" },
                  { stage: "Supplement", icon: "💊", color: "from-primary/50" },
                ].map((step, index) => (
                  <div key={step.stage} className="group relative">
                    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-primary/20 hover:border-primary/40">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{step.icon}</div>
                        <p className="text-sm font-medium">{step.stage}</p>

                        {/* Connection line */}
                        {index < 5 && (
                          <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-[2px] bg-gradient-to-r from-primary/40 to-transparent" />
                        )}
                      </CardContent>
                    </Card>

                    {/* Hover tooltip */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <Button variant="link" size="sm" className="text-primary whitespace-nowrap">
                        View Guide →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extraction & Alchemy */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/glass-beaker-with-amber-liquid-glowing-bioluminesc.jpg"
                  alt="Extraction process"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
                  Extraction & <span className="text-primary">Alchemy</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Learn dual extraction to unleash full medicinal potency.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our guides combine science with spirit — from polysaccharides to terpenes.
                </p>
                <Button size="lg" className="group">
                  <Beaker className="mr-2 h-5 w-5" />
                  Explore Extraction Guides
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Apothecary Shelf */}

        {/* Knowledge Base */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-6">
              Knowledge Base: The <span className="text-primary">Fungal Mind</span>
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Research-based guides to master the art and science of medicinal mushroom cultivation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { title: "Understanding Beta-Glucans and Immunity", icon: "🧬", readTime: "8 min" },
                { title: "Cordycepin Extraction Methods", icon: "⚗️", readTime: "12 min" },
                { title: "Safe Sterilization for Home Mycology", icon: "🔬", readTime: "10 min" },
                { title: "Building a Small Grow Tent Under $200", icon: "🏠", readTime: "15 min" },
              ].map((guide, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/40 relative overflow-hidden"
                >
                  <CardContent className="p-6">
                    {/* Mycelium growth effect on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-primary to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{guide.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-pretty">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{guide.readTime} read</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/guides">
                <Button variant="outline" size="lg" className="group bg-transparent">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Browse All Guides
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Community Cultivators */}
        

        {/* Cinematic Scroll Section - "From Forest to Flask" */}
        
      </main>

      <Footer />
    </div>
  )
}
