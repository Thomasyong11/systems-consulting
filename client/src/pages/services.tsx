import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, Cog, Check } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cloud solutions designed to modernize your business operations and drive growth
          </p>
        </div>

        <div className="space-y-16">
          {/* Service 1 */}
          <Card className="bg-card shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Search className="w-8 h-8 text-primary mr-4" />
                  <h2 className="text-2xl font-bold text-foreground">Infrastructure Assessment and Modernization</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Full workflow and infrastructure audit with modernization roadmap to M365. We analyze your current systems, identify optimization opportunities, and create a comprehensive migration strategy.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Deliverables:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      User manual and documentation
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Improvement recommendations
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Scalability guidance
                    </li>
                  </ul>
                </div>
                <Link href="/contact">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold transition-all duration-300 hover:shadow-lg"
                    data-testid="button-book-consult-infrastructure"
                  >
                    Book a Consult
                  </Button>
                </Link>
              </CardContent>
              <CardContent className="p-8">
                <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 text-center">
                  <svg className="w-20 h-20 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-muted-foreground">Comprehensive Infrastructure Analysis</p>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Service 2 */}
          <Card className="bg-card shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <CardContent className="p-8 order-2 md:order-1">
                <div className="bg-secondary/5 dark:bg-secondary/10 rounded-xl p-6 text-center">
                  <svg className="w-20 h-20 text-secondary-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <p className="text-muted-foreground">SharePoint Hub Configuration</p>
                </div>
              </CardContent>
              <CardContent className="p-8 order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-secondary-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <h2 className="text-2xl font-bold text-foreground">SharePoint Online Hub Site Configuration</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Setup and customization of corporate SharePoint hub sites with Teams integration. Create centralized collaboration spaces that enhance productivity and information sharing.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Deliverables:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Fully configured SharePoint collection
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Permissions and security setup
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Admin integration documentation
                    </li>
                  </ul>
                </div>
                <Link href="/contact">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold transition-all duration-300 hover:shadow-lg"
                    data-testid="button-book-consult-sharepoint"
                  >
                    Book a Consult
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Service 3 */}
          <Card className="bg-card shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Cog className="w-8 h-8 text-accent-500 mr-4" />
                  <h2 className="text-2xl font-bold text-foreground">Business Workflow Automation using PowerShell</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Identifying and automating repetitive business processes using SPO PowerShell. Streamline operations, reduce manual errors, and free up your team for strategic work.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Deliverables:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Custom automation scripts
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Training materials
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-accent-500 mr-2 mt-0.5 flex-shrink-0" />
                      Deployment support
                    </li>
                  </ul>
                </div>
                <Link href="/contact">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-semibold transition-all duration-300 hover:shadow-lg"
                    data-testid="button-book-consult-automation"
                  >
                    Book a Consult
                  </Button>
                </Link>
              </CardContent>
              <CardContent className="p-8">
                <div className="bg-accent/5 dark:bg-accent/10 rounded-xl p-6 text-center">
                  <Cog className="w-20 h-20 text-accent-500 mx-auto mb-4" />
                  <p className="text-muted-foreground">Process Automation Solutions</p>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
