import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './BlogPage.css'

function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="blog-page-hero">
        <div className="blog-page-hero-content">
          <h1>Blog</h1>
          <nav className="blog-page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="blog-page-breadcrumb-home">Home</Link>
            <span className="blog-page-breadcrumb-sep">/</span>
            <span className="blog-page-breadcrumb-current">Blog</span>
          </nav>
        </div>
      </section>

      <section className="blog-page-section">
        <div className="blog-page-container">
          <div className="blog-page-header">
            <h2>Latest from our blog</h2>
          </div>
          <div className="blog-page-grid">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="blog-page-card-link"
              >
                <article className="blog-page-card">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                  <div className="blog-page-card-content">
                    <h3>{post.title}</h3>
                    <div className="blog-page-meta">
                      <span>👤 {post.author}</span>
                      <span>💬 {post.comments} Comments</span>
                    </div>
                    <p className="blog-page-date">{post.date}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BlogPage
