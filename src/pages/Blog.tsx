import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: '5 Essential Tools Every Beginner Tailor Needs',
    excerpt: 'Starting your sewing journey? Here are the top 5 tools you absolutely must have in your kit.',
    date: 'Oct 12, 2023',
    category: 'Sewing Tips',
    img: 'https://images.unsplash.com/photo-1528804431125-842f17de657b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'How to Style Traditional Ankara for Modern Events',
    excerpt: 'Ankara is versatile! Learn how to mix and match traditional prints for a contemporary look.',
    date: 'Oct 05, 2023',
    category: 'Styling',
    img: 'https://images.unsplash.com/photo-1583391733958-d15ce1136964?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Choosing the Right Fabric for Kiddies Wear',
    excerpt: 'Comfort is key when sewing for children. Discover the best breathable fabrics for kids.',
    date: 'Sep 28, 2023',
    category: 'Fabric Guide',
    img: 'https://images.unsplash.com/photo-1519238396245-89dbf5c3c0f6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'The Rise of Nigerian Streetwear',
    excerpt: 'Exploring how local designers are putting Nigerian streetwear on the global map.',
    date: 'Sep 15, 2023',
    category: 'Trends',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Blog() {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">Fashion Blog</h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tips, trends, and tutorials from the House of Lizzy team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {POSTS.map(post => (
            <Card key={post.id} className="overflow-hidden border-border group flex flex-col sm:flex-row">
              <div className="sm:w-2/5 relative overflow-hidden bg-muted min-h-[200px] sm:min-h-full">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="sm:w-3/5 flex flex-col justify-center">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                    <span>{post.category}</span>
                    <span>&bull;</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold hover:text-secondary">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
