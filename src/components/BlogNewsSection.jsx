import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import './BlogNewsSection.css'

const BlogNewsSection = () => {
  return (
    <section id="blog" className="blog-news-section">
      <div className="blog-header">
        <h2>
          See our latest daily blog
          <br />
          and news from us
        </h2>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="blog-card-link"
          >
            <article className="blog-card">
              <img src={post.image} alt={post.alt} loading="lazy" />
              <div className="blog-content">
                <h3>{post.title}</h3>
                <div className="blog-meta">
                  <div className="meta-item">👤 {post.author}</div>
                  <div className="meta-item">💬 {post.comments} Comments</div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default BlogNewsSection
