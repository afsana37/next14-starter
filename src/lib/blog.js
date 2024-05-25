// lib/blog.js

// Example function to fetch all blog slugs
export function getAllBlogSlugs() {
    // This should return an array of slugs
    // Example: ['post-1', 'post-2']
    return ['post-1', 'post-2'];
  }
  
  // Example function to fetch blog data for a specific slug
  export async function getBlogData(slug) {
    // Fetch or compute the blog data for the given slug
    // Example data structure returned
    return {
      title: `Title for ${slug}`,
      content: `Content for ${slug}`,
      image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      author: 'Afsana Abida',
      authorImage: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      publishedDate: '01.01.24',
    };
  }
  