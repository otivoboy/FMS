
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/lib/blog-posts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const excerpt = post.content.substring(0, 155);

  return {
    title: post.title,
    description: excerpt,
    openGraph: {
      title: post.title,
      description: excerpt,
      type: 'article',
      url: `/blogs/${post.slug}`,
      images: [
        {
          url: post.image?.imageUrl || '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = ({ params }: Props) => {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 2);

  return (
    <main className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 pt-24">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blogs" className="text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </Button>
          </div>

          <header className="mb-8">
            <p className="text-accent font-semibold mb-2">{post.category}</p>
            <h1 className="text-4xl font-bold text-primary mb-4 font-headline">{post.title}</h1>
            <div className="text-sm text-muted-foreground">
              <span>By {post.author}</span> | <span>{post.date}</span>
            </div>
          </header>

          {post.image && (
            <div className="relative h-96 w-full rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image 
                src={post.image.imageUrl} 
                alt={post.title} 
                fill 
                className="object-cover"
                data-ai-hint={post.image.imageHint}
                priority
              />
            </div>
          )}

          <div
            className="prose dark:prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-primary prose-h3:text-xl prose-h4:text-lg prose-ul:list-disc prose-ul:ml-4 prose-li:text-muted-foreground prose-strong:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </article>

        {relatedPosts.length > 0 && (
             <div className="mt-16 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-primary mb-6 font-headline">Related Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {relatedPosts.map(relatedPost => (
                         <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                {relatedPost.image && (
                                     <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src={relatedPost.image.imageUrl}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover"
                                            data-ai-hint={relatedPost.image.imageHint}
                                        />
                                    </div>
                                )}
                                <p className="text-sm text-accent font-semibold mb-1">{relatedPost.category}</p>
                                <h3 className="text-xl font-semibold text-primary mb-2 hover:text-accent transition-colors">
                                    <Link href={`/blogs/${relatedPost.slug}`}>
                                        {relatedPost.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-3" dangerouslySetInnerHTML={{ __html: relatedPost.content.substring(0, 100) + '...' }}/>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        )}
      </div>
    </main>
  );
};

export default BlogPostPage;
