import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { CheckCircle2, Calendar } from 'lucide-react';

export default function Classes() {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Fashion Classes</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn the art of fashion design at House of Lizzy. We offer comprehensive classes in Ado Ekiti for all skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Beginner Class */}
          <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="bg-primary/5 pb-8">
              <CardTitle className="font-heading text-2xl text-primary">Beginner's Course</CardTitle>
              <CardDescription className="text-base">Perfect for those with zero sewing experience.</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold text-primary">₦50,000</span>
                <span className="text-muted-foreground"> / 3 months</span>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <ul className="space-y-4 mb-8">
                {[
                  'Introduction to sewing machines',
                  'Basic body measurements',
                  'Simple pattern drafting',
                  'Cutting and sewing basic skirts and tops',
                  'Fabric selection and care'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                  <Calendar className="mr-2 h-4 w-4" /> Book Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Advanced Class */}
          <Card className="border-secondary shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Popular
            </div>
            <CardHeader className="bg-secondary/10 pb-8">
              <CardTitle className="font-heading text-2xl text-primary">Advanced Masterclass</CardTitle>
              <CardDescription className="text-base">For those who want to master complex designs.</CardDescription>
              <div className="mt-4">
                <span className="text-3xl font-bold text-primary">₦120,000</span>
                <span className="text-muted-foreground"> / 6 months</span>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <ul className="space-y-4 mb-8">
                {[
                  'Advanced pattern drafting (Corsets, Gowns)',
                  'Working with delicate fabrics (Lace, Silk)',
                  'Traditional wear mastery (Agbada, Iro & Buba)',
                  'Beading and embellishments',
                  'Fashion business and branding'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" size="lg">
                  <Calendar className="mr-2 h-4 w-4" /> Book Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 bg-primary/5 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-heading text-3xl font-bold text-primary mb-4">Need a Custom Schedule?</h3>
          <p className="text-muted-foreground mb-8">
            We also offer private one-on-one sessions tailored to your specific needs and availability.
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              Contact Us for Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
