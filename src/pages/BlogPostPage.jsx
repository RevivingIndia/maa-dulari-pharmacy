import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getBlogPostById } from '../data/blogPosts'
import './BlogPostPage.css'

function BlogPostPage() {
  const { id } = useParams()
  const post = getBlogPostById(id)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="blog-post-page max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h1>
          <Link to="/" className="text-teal-600 hover:underline">← Back to home</Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="blog-post-page">
        <article className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-[#1b1454] font-medium mb-8 hover:underline"
          >
            ← Back to blog & news
          </Link>

          <img
            src={post.image}
            alt={post.alt}
            className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-8"
          />

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b1454] mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[#6b7280] mb-8">
            <span className="flex items-center gap-1.5">👤 {post.author}</span>
            <span>{post.date}</span>
            <span className="flex items-center gap-1.5">💬 {post.comments} Comments</span>
          </div>

          <div
            className="blog-post-content prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.trim() }}
          />
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPostPage
