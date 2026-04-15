import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ShoppingCart } from 'lucide-react';

const PRODUCTS = [
  { id: 1, title: 'Urban Streetwear Set', price: '₦15,000', category: 'streetwear', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Kids Ankara Dress', price: '₦8,500', category: 'kiddies', img: 'https://images.unsplash.com/photo-1519238396245-89dbf5c3c0f6?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Traditional Agbada', price: '₦35,000', category: 'traditional', img: 'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Casual Two-Piece', price: '₦12,000', category: 'streetwear', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Boys Native Set', price: '₦10,000', category: 'kiddies', img: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Women Lace Buba', price: '₦25,000', category: 'traditional', img: 'https://images.unsplash.com/photo-1583391733958-d15ce1136964?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'Graphic Tee', price: '₦5,000', category: 'streetwear', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop' },
  { id: 8, title: 'Girls Party Dress', price: '₦15,000', category: 'kiddies', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=800&auto=format&fit=crop' },
];

const CATEGORIES = [
  { id: 'all', name: 'All Wears' },
  { id: 'streetwear', name: 'Streetwear' },
  { id: 'kiddies', name: 'Kiddies Wear' },
  { id: 'traditional', name: 'Traditional Wears' },
];

const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^\d]/g, ''), 10);

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  let sortedProducts = [...filteredProducts];
  if (sortBy === 'price-asc') {
    sortedProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortBy === 'price-desc') {
    sortedProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  } else if (sortBy === 'name-asc') {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'name-desc') {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Our Collection</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our latest designs. From trendy streetwear to elegant traditional outfits and cute kiddies wear.
          </p>
        </div>

        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map(cat => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? "bg-primary text-primary-foreground" : "border-primary text-primary"}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="w-full md:w-56">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-primary text-primary">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Sorting</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Alphabetical: A-Z</SelectItem>
                <SelectItem value="name-desc">Alphabetical: Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map(product => (
            <Card key={product.id} className="overflow-hidden border-border group">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-lg text-primary mb-1">{product.title}</h3>
                <p className="text-secondary font-semibold">{product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
