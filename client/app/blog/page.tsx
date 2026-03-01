import { Search, Eye, Calendar, ArrowRight } from "lucide-react";
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
  const getViews = (post: any) => Number(post.fields?.views) || 0;
  
  // Sort and Slice for Sidebar
  const topPosts = [...items].sort((a, b) => getViews(b) - getViews(a)).slice(0, 5);

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      {/* Header Space */}
      <div className="pt-16 pb-10 px-8 max-w-7xl mx-auto">
        <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-3">
          Our Journal
        </h2>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
          Insights & <span className="text-slate-400 font-medium">Market Trends</span>
        </h1>
      </div>

      <main className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
        
        {/* Left Column: Main Feed (8 Cols) */}
        <div className="lg:col-span-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {items.map((post: any) => (
              <article
                key={post.sys.id}
                className="group cursor-pointer space-y-5"
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[16/10]">
                  {post.fields?.featuredImage && (
                    <img
                      src={post.fields.featuredImage.fields.file.url}
                      alt={post.fields.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                    Financial Tech
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 px-2">
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={12} /> May 24, 2026</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Eye size={12} /> {getViews(post)}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors leading-tight">
                    {post.fields?.title || "Untitled Post"}
                  </h2>
                  
                  <p className="text-slate-500 line-clamp-2 text-sm leading-relaxed">
                    {post.fields?.description || "Exploring the future of digital wealth management and secure transactions."}
                  </p>

                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm pt-2">
                    Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Sidebar (4 Cols) */}
        <aside className="lg:col-span-4 space-y-12">
          
          {/* Refined Search */}
          <div className="relative group">
            <input
              className="w-full bg-slate-50 border border-slate-100 p-4 pl-12 rounded-2xl text-sm focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
              type="text"
              placeholder="Search articles..."
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
          </div>

          {/* Top Posts Section */}
          <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              Popular <span className="text-emerald-600">Insights</span>
            </h3>
            
            <div className="space-y-8">
              {topPosts.map((post: any, idx) => (
                <div key={post.sys.id} className="flex gap-4 group cursor-pointer">
                  <span className="text-2xl font-black text-slate-200 group-hover:text-emerald-200 transition-colors">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 group-hover:text-emerald-600 transition-colors leading-snug text-sm">
                      {post.fields?.title}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                      <Eye size={10} /> {getViews(post)} Views
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA Sidebar Card */}
          <div className="bg-emerald-600 rounded-[2.5rem] p-8 text-white">
            <h4 className="text-xl font-bold mb-3">Stay Updated</h4>
            <p className="text-emerald-100 text-sm mb-6 leading-relaxed">
              Get the latest financial trends delivered to your inbox weekly.
            </p>
            <button className="w-full bg-white text-emerald-600 font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors">
              Subscribe
            </button>
          </div>
        </aside>

      </main>
    </div>
  );
};

export default blogPage;