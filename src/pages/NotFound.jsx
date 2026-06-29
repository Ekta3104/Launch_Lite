import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-6 text-center flex-grow bg-slate-50">
      <div className="bg-white p-12 rounded-3xl shadow-xl shadow-primary/5 max-w-lg w-full border border-slate-100">
        <h1 className="text-8xl font-black font-outfit text-slate-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold font-outfit text-primary mb-4">Page Not Found</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 rounded-xl font-bold tracking-wide hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
