import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { blogPosts, blogCategories } from "@/data/siteData";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/shared/BlogCard";
import CTASection from "@/components/shared/CTASection";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const featured = blogPosts.find(p => p.featured);
  const regular = blogPosts.filter(p => !p.featured && (filter === "All" || p.category === filter));

  return (
    <>
      <Helmet>
        <title>Blog | NorthPeak Websites</title>
        <meta name="description" content="Tips and guides on local SEO, web design, and growing your small business online. Practical advice you can use today." />
      </Helmet>
      <Layout>
        <section className="pt-32 pb-16 bg-primary text-primary-foreground">
          <div className="container-wide">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="badge-accent mb-4 inline-block">Blog</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Local Growth Tips & Guides</h1>
              <p className="text-xl text-primary-foreground/80">Practical advice on websites, local SEO, and growing your small business online.</p>
            </motion.div>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-wide">
            {featured && <div className="mb-12"><BlogCard {...featured} /></div>}
            <div className="flex flex-wrap gap-2 mb-8">
              {blogCategories.map(cat => <Button key={cat} variant={filter === cat ? "accent" : "outline"} size="sm" onClick={() => setFilter(cat)}>{cat}</Button>)}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((post, i) => <BlogCard key={post.id} {...post} index={i} />)}
            </div>
          </div>
        </section>
        <CTASection variant="light" title="Need Help With Your Website?" subtitle="Book a free call and let's discuss how we can help your business grow online." />
      </Layout>
    </>
  );
};

export default Blog;
