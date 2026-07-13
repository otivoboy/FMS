'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts, categories, BlogPost } from '@/lib/blog-posts';

const BlogPostCard = ({ post, isFeatured = false }: { post: BlogPost, isFeatured?: boolean }) => {
    return (
        <Card className={cn(
            "bg-card rounded-xl shadow-lg overflow-hidden border border-border transition-shadow hover:shadow-xl",
            isFeatured ? "md:col-span-2 lg:col-span-3" : ""
        )}>
            <div className={cn(isFeatured && "md:flex")}>
                {post.image && (
                     <div className={cn(
                        "relative",
                        isFeatured ? "md:flex-shrink-0 md:w-1/2 min-h-[256px] md:min-h-full" : "h-48 w-full"
                    )}>
                        <Image 
                            className="object-cover" 
                            src={post.image.imageUrl} 
                            alt={post.image.description}
                            fill
                            data-ai-hint={post.image.imageHint}
                        />
                    </div>
                )}
                <div className={cn("p-6 flex flex-col", isFeatured && "md:w-1/2")}>
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">{post.category}</span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className={cn("font-bold text-primary mb-4 font-headline", isFeatured ? "text-2xl" : "text-xl")}>{post.title}</h2>
                    
                    <div className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3" dangerouslySetInnerHTML={{ __html: post.content }} />
                   
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto mt-auto">
                        <Link href={`/blogs/${post.slug}`}>
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4"/>
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
}

const BlogsPage = () => {
    const featuredPost = blogPosts.find(p => p.isFeatured);
    const regularPosts = blogPosts.filter(p => !p.isFeatured);

    return (
        <main className="bg-background text-foreground">
            <div className="container mx-auto px-4 py-8 pt-24">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4 font-headline">Facilities Management Insights</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Expert advice on facility management, maintenance, and optimization for Nairobi businesses.</p>
                </div>
                
                {featuredPost && <BlogPostCard post={featuredPost} isFeatured />}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {regularPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
                </div>

                <div className="mt-16">
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold text-primary mb-4">About Facilities Management Blog</h2>
                            <p className="text-muted-foreground mb-6">Our Blog is your trusted resource for facilities management insights, maintenance tips, and industry trends specific to the Nairobi market. Our team of experts shares practical advice to help businesses and homeowners maintain efficient, safe, and well-managed spaces.</p>
                            <h3 className="text-xl font-semibold text-primary mb-4">Categories Covered</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <Badge key={category} variant="secondary" className="bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent-foreground transition-all">
                                        {category}
                                    </Badge>
                                ))}
                            </div>
                            <p className="text-muted-foreground mt-6">Stay connected with Facilities Management Services for the latest updates and expert advice on managing your facilities in Nairobi. Contact us today to learn how we can help optimize your space for comfort, efficiency, and productivity.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
};

export default BlogsPage;
