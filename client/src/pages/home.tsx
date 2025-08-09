import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Cloud,
  Cog,
  Shield,
  BarChart3,
  Users,
  Clock,
  Percent,
  Search,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-background dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Empowering Your Business Through{" "}
                <span className="text-primary">Cloud Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                From infrastructure audits to automated workflows, we help you modernize, optimize, and thrive in the cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                    data-testid="button-book-consultation"
                  >
                    Book Your Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300"
                    data-testid="button-explore-services"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <Card className="bg-card shadow-2xl animate-float">
                <CardContent className="p-8">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                      <Cloud className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Cloud Migration</p>
                    </div>
                    <div className="p-4">
                      <Cog className="w-12 h-12 text-secondary-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Automation</p>
                    </div>
                    <div className="p-4">
                      <Shield className="w-12 h-12 text-accent-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Security</p>
                    </div>
                    <div className="p-4">
                      <svg className="w-12 h-12 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      <p className="text-sm text-muted-foreground">Microsoft 365</p>
                    </div>
                    <div className="p-4">
                      <BarChart3 className="w-12 h-12 text-secondary-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">SharePoint</p>
                    </div>
                    <div className="p-4">
                      <BarChart3 className="w-12 h-12 text-accent-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Analytics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-muted/50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Growing Businesses</h2>
            <p className="text-muted-foreground text-lg">Delivering measurable results through proven expertise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 bg-card shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Percent className="w-16 h-16 text-accent-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="text-cost-savings">
                  40% Cost Savings
                </h3>
                <p className="text-muted-foreground">Average infrastructure cost reduction for our clients</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-card shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="text-time-saved">
                  60% Time Saved
                </h3>
                <p className="text-muted-foreground">Efficiency gains through automation and optimization</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-card shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <Users className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid="text-businesses-served">
                  100+ Businesses
                </h3>
                <p className="text-muted-foreground">Successfully migrated to modern cloud solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive cloud solutions tailored for small-to-mid-sized businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-border">
              <CardContent className="p-0">
                <Search className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Infrastructure Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Full workflow and infrastructure audit with modernization roadmap to M365.
                </p>
                <Link href="/services">
                  <Button
                    variant="link"
                    className="text-primary hover:text-primary/90 font-medium p-0"
                    data-testid="button-learn-more-infrastructure"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-border">
              <CardContent className="p-0">
                <svg className="w-12 h-12 text-secondary-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <h3 className="text-xl font-semibold text-foreground mb-3">SharePoint Hub Sites</h3>
                <p className="text-muted-foreground mb-4">
                  Setup and customization of corporate SharePoint hub sites with Teams integration.
                </p>
                <Link href="/services">
                  <Button
                    variant="link"
                    className="text-primary hover:text-primary/90 font-medium p-0"
                    data-testid="button-learn-more-sharepoint"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-border">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Workflow Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Identifying and automating repetitive business processes using PowerShell.
                </p>
                <Link href="/services">
                  <Button
                    variant="link"
                    className="text-primary hover:text-primary/90 font-medium p-0"
                    data-testid="button-learn-more-automation"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
