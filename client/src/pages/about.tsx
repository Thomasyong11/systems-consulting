import { Card, CardContent } from "@/components/ui/card";
import { Award, Handshake, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Systems Consulting</h1>
          <p className="text-xl text-muted-foreground">Your trusted partner in cloud transformation</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <Card className="bg-card shadow-xl p-8 mb-12">
            <CardContent className="p-0">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Systems Consulting is a Canadian-based IT consulting business specializing in Microsoft 365, SharePoint Online, and automation solutions. With expertise in infrastructure modernization, workflow automation, and hub site design, we help small and mid-sized businesses transition smoothly to the cloud, saving costs and improving collaboration.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To empower small and mid-sized businesses across Canada with modern cloud solutions that drive efficiency, security, and growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
                    <svg className="w-6 h-6 text-secondary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the leading cloud transformation partner, making enterprise-grade technology accessible and affordable for growing businesses.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-primary/5 dark:bg-primary/10">
              <CardContent className="p-0">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Certified Experts</h4>
                <p className="text-sm text-muted-foreground">Microsoft certified professionals</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-secondary/5 dark:bg-secondary/10">
              <CardContent className="p-0">
                <Handshake className="w-12 h-12 text-secondary-500 mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Trusted Partner</h4>
                <p className="text-sm text-muted-foreground">Long-term client relationships</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-accent/5 dark:bg-accent/10">
              <CardContent className="p-0">
                <Rocket className="w-12 h-12 text-accent-500 mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Results Driven</h4>
                <p className="text-sm text-muted-foreground">Measurable business outcomes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
