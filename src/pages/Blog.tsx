import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts as importedBlogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Convert imported blog posts to the expected format
  const blogPosts = importedBlogPosts.map(post => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    date: new Date(post.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    readTime: post.readTime,
    tags: post.category === 'Digital Transformation' 
      ? ['Digital Transformation', 'Automation', 'Innovation']
      : post.category === 'AI & Technology'
      ? ['AI', 'Insurance Technology', 'Innovation']
      : ['Cost Savings', 'AI', 'Efficiency'],
    path: `/blog/${post.slug}`,
    image: post.image || '/api/placeholder/800/400'
  }));


  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  ).sort();

  // Filter posts based on search and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <SEO 
        title="Blog - Quotely Insurance Intelligence Platform"
        description="Stay updated with the latest insights on insurance technology, AI innovations, and industry trends from the Quotely blog."
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-primary-800 text-white py-16">
          <div className="container-wrapper">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-accent-500">Quotely</span> Blog
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Insights, updates, and innovations in insurance technology
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tags Filter */}
        <section className="py-8 bg-neutral-50 border-b border-neutral-200">
          <div className="container-wrapper">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-neutral-700 font-medium mr-2">Filter by topic:</span>
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === null
                    ? 'bg-secondary-500 text-white'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                All Topics
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-secondary-500 text-white'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container-wrapper">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Post Image */}
                    <div className="aspect-video bg-neutral-200">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Post Content */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map(tag => (
                          <span 
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                          >
                            <Tag size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-neutral-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      
                      {/* Read More Link */}
                      {post.path === '#' ? (
                        <span className="inline-flex items-center text-neutral-400 font-medium">
                          Coming Soon
                        </span>
                      ) : (
                        <Link 
                          to={post.path}
                          className="inline-flex items-center text-secondary-500 hover:text-secondary-600 font-medium transition-colors"
                        >
                          Read Article
                          <ArrowRight className="ml-1" size={16} />
                        </Link>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-neutral-600">
                  No articles found matching your search criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedTag(null);
                  }}
                  className="mt-4 text-secondary-500 hover:text-secondary-600 font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary-800 text-white py-16">
          <div className="container-wrapper">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Stay Updated with Insurance Innovation
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get the latest insights on AI, insurance technology, and industry trends delivered to your inbox.
              </p>
              <a
                href="mailto:sales@tryquotely.com?subject=Blog%20Updates%20Subscription"
                className="btn-primary"
              >
                Subscribe for Updates
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;