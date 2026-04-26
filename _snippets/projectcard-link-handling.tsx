import Link from "next/link";
{link && link !== "#" && (
  <div>
    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
      3. Project Link
    </h4>
    {link.startsWith("/") ? (
      <Link
        href={link}
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center text-accent hover:underline font-medium"
      >
        View Case Study
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    ) : (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center text-accent hover:underline font-medium"
      >
        View Project
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    )}
  </div>
)}
