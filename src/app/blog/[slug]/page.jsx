// src/app/blog/[slug]/page.jsx

import Image from "next/image";
import styles from "./singlePost.module.css";
import { getAllBlogSlugs, getBlogData } from '../../../lib/blog'; // Adjust the path as necessary

const SinglePostPage = ({ blogData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={blogData.image} 
          alt=""
          fill 
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{blogData.title}</h1>
        <div className={styles.detail}>
          <Image 
            className={styles.avatar}
            src={blogData.authorImage} 
            alt="" 
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>{blogData.author}</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{blogData.publishedDate}</span>
          </div>
        </div>
        <div className={styles.content}>
          {blogData.content}
        </div>
      </div> 
    </div>
  );
};

// Generate static paths for all blog slugs
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

// Fetch data for a specific blog post
export async function fetchBlogData(slug) {
  const blogData = await getBlogData(slug);
  return blogData;
}

// Use the `fetchBlogData` function in the page component to get data
export async function generateMetadata({ params }) {
  const blogData = await fetchBlogData(params.slug);
  return {
    title: blogData.title,
    description: blogData.content.substring(0, 160), // Example: first 160 characters of content
  };
}

// Load blog data
export default async function Page({ params }) {
  const blogData = await fetchBlogData(params.slug);
  return <SinglePostPage blogData={blogData} />;
}
