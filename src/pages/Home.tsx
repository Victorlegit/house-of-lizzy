import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Scissors, ShoppingBag, BookOpen, Quote } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-primary/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000&auto=format&fit=crop" 
            alt="Fashion sewing" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10 px-4 text-center">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">Welcome to</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary mb-6">
            House of Lizzy <br />
            <span className="text-3xl md:text-5xl font-normal italic text-primary/80">Stitches & Fashion</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover affordable streetwear, kiddies wear, and traditional outfits. Learn the art of fashion with our expert classes in Ado Ekiti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                Shop Collection
              </Button>
            </Link>
            <Link to="/classes">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                Book a Class
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center group hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Custom Wears</h3>
              <p className="text-muted-foreground mb-6">
                Affordable and stylish streetwear, kiddies wear, and beautiful traditional outfits tailored to perfection.
              </p>
              <Link to="/shop" className="text-primary font-medium inline-flex items-center gap-2 hover:text-secondary transition-colors">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center group hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Fashion Classes</h3>
              <p className="text-muted-foreground mb-6">
                Learn how to sew from scratch. Our comprehensive classes cover pattern drafting, cutting, and sewing.
              </p>
              <Link to="/classes" className="text-primary font-medium inline-flex items-center gap-2 hover:text-secondary transition-colors">
                Book a Class <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center group hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition-colors">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-semibold mb-3">Fashion Blog</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with the latest fashion trends, styling tips, and sewing tutorials from our experts.
              </p>
              <Link to="/blog" className="text-primary font-medium inline-flex items-center gap-2 hover:text-secondary transition-colors">
                Read Tips <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-4xl font-bold text-primary mb-4">Featured Collection</h2>
              <div className="w-24 h-1 bg-secondary"></div>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-2 text-primary hover:text-secondary font-medium transition-colors">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Urban Streetwear Set', price: '₦15,000', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop' },
              { title: 'Kids Ankara Dress', price: '₦8,500', img: 'https://images.unsplash.com/photo-1519238396245-89dbf5c3c0f6?q=80&w=800&auto=format&fit=crop' },
              { title: 'Traditional Agbada', price: '₦35,000', img: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=800&auto=format&fit=crop' },
              { title: 'Casual Two-Piece', price: '₦12,000', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-muted">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">Quick View</Button>
                  </div>
                </div>
                <h3 className="font-medium text-lg text-primary">{item.title}</h3>
                <p className="text-secondary font-semibold">{item.price}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/shop">
              <Button variant="outline" className="border-primary text-primary">
                View All Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                quote: "The fashion classes at House of Lizzy are top-notch! I started with zero knowledge and now I can sew my own dresses.",
                author: "Sarah O.",
                role: "Student"
              },
              {
                id: 2,
                quote: "I ordered a custom traditional wear for my wedding and it was absolutely stunning. The attention to detail is amazing.",
                author: "Adebayo T.",
                role: "Client"
              },
              {
                id: 3,
                quote: "Best place to get affordable and stylish kiddies wear in Ado Ekiti. My kids love their outfits!",
                author: "Mrs. Johnson",
                role: "Customer"
              }
            ].map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-8 rounded-2xl shadow-sm border border-border relative">
                <Quote className="h-10 w-10 text-secondary/40 absolute top-6 right-6" />
                <div className="mb-6 relative z-10">
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.author}</h4>
                    <p className="text-sm text-secondary font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Fashion Journey?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join our classes in Ado Ekiti today and learn how to create your own stunning pieces, or shop our latest collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/classes">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full sm:w-auto">
                Enroll Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
