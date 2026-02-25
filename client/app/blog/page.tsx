import { Search, Eye } from "lucide-react";
import { client } from "@/lib/contentful";
import Navbar from "@/components/home/Navbar";

const blogPage = async () => {
  let res: any = null;

  if (client) {
    try {
      res = await client.getEntries({
        content_type: "pageBlogPost",
      });
    } catch (error) {
      console.error("Contentful fetch error:", error);
    }
  }

  const items = res?.items || [];

  // Helper to get numeric views safely
  const getViews = (post: any) => Number(post.fields?.views) || 0;

  // Top 5 posts sorted by views
  const topPosts = [...items].sort((a, b) => getViews(b) - getViews(a)).slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Navigation */}
      <Navbar />
      <hr className="border-gray-300 dark:border-gray-700" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 divide-y md:divide-y-0 md:divide-x divide-gray-300 dark:divide-gray-700">
        {/* Left Column: Blog Posts */}
        <div className="flex flex-col p-5 md:p-10">
          <h1 className="font-bold uppercase text-2xl sm:text-3xl lg:text-4xl mb-6 text-center md:text-left">
            Discover our latest posts
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {items.map((post: any) => (
              <div
                key={post.sys.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
              >
                {post.fields?.featuredImage && (
                  <img
                    src={post.fields.featuredImage.fields.file.url}
                    alt={post.fields.title || "Blog post"}
                    className="w-full h-48 object-cover rounded-t-3xl"
                  />
                )}
                <div className="p-4">
                  <h2 className="font-semibold text-lg md:text-xl mb-2">
                    {post.fields?.title || "Untitled"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                    {post.fields?.description || "No description available."}
                  </p>
                  {post.fields?.author && (
                    <div className="flex items-center gap-2">
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src={post.fields.author.fields.avatar.fields.file.url}
                        alt={post.fields.author.fields.name}
                      />
                      <span className="text-gray-700 dark:text-gray-200 text-sm">
                        {post.fields.author.fields.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Search & Top Posts */}
        <div className="flex flex-col p-5 md:p-10">
          {/* Search */}
          <div className="relative w-full mb-6">
            <input
              className="p-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-full w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              type="text"
              name="search"
              id="search"
              placeholder="Search posts..."
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <Search size={20} />
            </span>
          </div>

          {/* Top Posts */}
          <div>
            <h1 className="font-bold text-2xl sm:text-3xl mb-5">Top Posts</h1>
            <div className="flex flex-col gap-4">
              {topPosts.map((post: any) => (
                <div
                  key={post.sys.id}
                  className="flex gap-3 items-center hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-lg transition"
                >
                  {post.fields?.featuredImage && (
                    <img
                      src={post.fields.featuredImage.fields.file.url}
                      alt={post.fields?.title || "Top post"}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                  )}
                  <div className="flex flex-col">
                    <h2 className="font-medium text-sm sm:text-base md:text-lg">
                      {post.fields?.title || "Untitled"}
                    </h2>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm gap-1 mt-1">
                      <Eye size={14} /> {getViews(post)} views
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogPage;
