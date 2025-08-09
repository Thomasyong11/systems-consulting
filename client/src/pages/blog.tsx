import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Blog</h1>
          <p className="text-xl text-muted-foreground">Insights and expertise on cloud transformation</p>
        </div>

        {/* Main Blog Post */}
        <article className="mb-12">
          <Card className="bg-card shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <span>By Systems Consulting</span>
                <span className="mx-2">•</span>
                <span data-testid="text-blog-date">{currentDate}</span>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Small Businesses Can't Afford to Delay Cloud Migration
              </h2>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="leading-relaxed">
                  In today's fast-changing business world, small and mid-sized businesses can't afford to be left behind when it comes to technology. Cloud migration is no longer a "nice-to-have" — it's a necessity for staying competitive, secure, and scalable.
                </p>

                <p className="leading-relaxed">
                  One of the biggest advantages of moving to the cloud is flexibility. With solutions like Microsoft 365 and SharePoint Online, your team can work from anywhere, access documents securely, and collaborate in real-time. This not only increases productivity but also keeps your operations running even during disruptions.
                </p>

                <p className="leading-relaxed">
                  Security is another key factor. Modern cloud platforms offer built-in threat protection, compliance tools, and regular updates — features that are difficult and expensive to replicate on-premises.
                </p>

                <p className="leading-relaxed">
                  Cost savings are also significant. By shifting to a subscription-based model, you avoid large upfront infrastructure costs and only pay for what you use. This frees up cash flow to reinvest in other areas of your business.
                </p>

                <p className="leading-relaxed">
                  At Systems Consulting, we help businesses navigate the migration process smoothly, from infrastructure assessment to full deployment. If you've been putting off your cloud transition, now is the time to act. Your future growth depends on it.
                </p>
              </div>

              <Card className="mt-8 bg-primary/5 dark:bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Start Your Cloud Journey?</h3>
                  <p className="text-muted-foreground mb-4">
                    Get a free consultation to discuss your specific needs and migration strategy.
                  </p>
                  <Link href="/contact">
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                      data-testid="button-schedule-consultation"
                    >
                      Schedule Consultation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </article>

        {/* Secondary Blog Post Preview */}
        <Card className="bg-card shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Coming Soon</h3>
            <h4 className="text-xl font-semibold text-primary mb-3">
              Three Ways Microsoft 365 Can Transform Your Business Operations
            </h4>
            <p className="text-muted-foreground mb-4">
              Discover how collaboration tools, automation capabilities, and cost-effective solutions can revolutionize your business processes.
            </p>
            <Link href="/contact">
              <Button
                variant="link"
                className="text-primary hover:text-primary/90 font-medium p-0"
                data-testid="button-request-assessment"
              >
                Request a Tailored Assessment <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
