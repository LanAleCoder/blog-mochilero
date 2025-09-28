import { BlogPost } from "./BlogPost";
import { Button } from "./ui/button";
import { AdBanner } from "./AdBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "./LanguageProvider";
import { getAllBlogArticles } from "../data/blogData";

interface BlogSectionProps {
  onBlogClick?: (title: string) => void;
}

export function BlogSection({ onBlogClick }: BlogSectionProps) {
  const { t } = useLanguage();
  const blogPosts = getAllBlogArticles();

  return (
    <section id="guides" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">
            {t("blog.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post and Regular Posts */}
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              {/* Featured post */}
              {blogPosts.length > 0 && (
                <BlogPost
                  {...blogPosts[0]}
                  onReadMore={() => onBlogClick?.(blogPosts[0].title)}
                />
              )}

              {/* Ad between posts */}
              <AdBanner size="medium" />

              {/* Regular posts grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts.slice(1, 5).map((post, index) => (
                  <BlogPost
                    key={index}
                    {...post}
                    onReadMore={() => onBlogClick?.(post.title)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Categories */}
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg mb-4 text-foreground">
                  {t("blog.categories")}
                </h3>
                <div className="space-y-3">
                  {[
                    "Rutas",
                    "Consejos",
                    "Transporte",
                    "Aventura",
                    "Ciudades",
                    "Presupuesto",
                  ].map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between"
                    >
                      <span className="text-foreground hover:text-primary cursor-pointer">
                        {category}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {Math.floor(Math.random() * 10) + 3}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Ad */}
              <AdBanner size="large" position="side" />

              {/* Popular Posts */}
              <div className="bg-card p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg mb-4 text-foreground">
                  {t("blog.popular")}
                </h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post, index) => (
                    <div
                      key={index}
                      className="flex gap-3 cursor-pointer"
                      onClick={() => onBlogClick?.(post.title)}
                    >
                      <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium line-clamp-2 hover:text-primary cursor-pointer text-foreground">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              {/* <div className="bg-primary/10 p-6 rounded-lg border">
                <h3 className="text-lg mb-2 text-foreground">
                  {t("blog.newsletter")}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("blog.newsletterDesc")}
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-3 py-2 border rounded text-sm bg-background text-foreground"
                  />
                  <Button className="w-full">{t("blog.subscribe")}</Button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t("blog.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}
