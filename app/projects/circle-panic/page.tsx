import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Circle Panic — Party Game Market Research | Eren Hasan Kasap",
  description:
    "A product-management teardown of the mobile party-game category: competitor analysis, perceptual map, and a 12-month cost model comparing a full studio against a two-student bootstrap.",
};

export default function CirclePanicPage() {
  return (
    <main className="min-h-screen pt-10">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 mb-6">
        <Link
          href="/projects"
          className="text-secondary hover:text-accent flex items-center gap-2 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <span className="text-accent font-medium tracking-widest uppercase mb-4 block text-sm">
          Product Research · 2026
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-6">
          Circle Panic: Party Game Market Research
        </h1>
        <p className="text-xl text-secondary leading-relaxed max-w-3xl">
          What if every mobile party game lives in the same corner of the map —
          and one corner is completely empty?
        </p>

        {/* Quick meta strip */}
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="bg-surface text-primary text-sm font-medium px-3 py-1.5 rounded-full border border-primary/5">
            Competitive Analysis
          </span>
          <span className="bg-surface text-primary text-sm font-medium px-3 py-1.5 rounded-full border border-primary/5">
            Perceptual Map
          </span>
          <span className="bg-surface text-primary text-sm font-medium px-3 py-1.5 rounded-full border border-primary/5">
            Cost Modeling
          </span>
          <span className="bg-surface text-primary text-sm font-medium px-3 py-1.5 rounded-full border border-primary/5">
            5 Competitors
          </span>
          <span className="bg-surface text-primary text-sm font-medium px-3 py-1.5 rounded-full border border-primary/5">
            12-Month Model
          </span>
        </div>
      </section>

      {/* THE QUESTION */}
      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-surface">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
          The Question
        </h2>
        <p className="text-2xl text-primary leading-relaxed font-medium">
          Where does a new mobile party game actually fit in a category that
          already includes Heads Up!, Spaceteam, and a wall of dare-card clones —
          and what would it cost to build it?
        </p>
      </section>

      {/* PERCEPTUAL MAP */}
      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-surface">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
          Perceptual Map
        </h2>
        <p className="text-secondary leading-relaxed mb-8 max-w-3xl">
          Plotting five direct competitors on two axes — where the game is
          played and how its content evolves — surfaces a clear pattern. Every
          incumbent clusters in the same quadrant. The opposite corner is
          unoccupied.
        </p>

        <div className="bg-white rounded-2xl border border-surface shadow-sm p-6 md:p-10">
          <Image
            src="/circle-panic-perceptual-map.svg"
            alt="Perceptual map showing five party-game competitors clustered in the offline + static content quadrant, with Circle Panic positioned in the unoccupied offline + dynamic quadrant."
            width={720}
            height={560}
            className="w-full h-auto"
            unoptimized
          />
        </div>

        <p className="text-sm text-secondary italic mt-4">
          The vertical axis tracks how a product&apos;s content evolves —
          fixed decks vs. live-ops updates. The horizontal axis tracks where
          the game is actually played — remote vs. in-person.
        </p>
      </section>

      {/* KEY FINDINGS */}
      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-surface">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
          Key Findings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl border border-surface p-6">
            <div className="text-4xl font-bold text-accent mb-2">5/5</div>
            <p className="text-sm text-secondary leading-relaxed">
              Competitors cluster in the same quadrant: offline play with
              static, fixed content.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-surface p-6">
            <div className="text-4xl font-bold text-accent mb-2">$1.7M</div>
            <p className="text-sm text-secondary leading-relaxed">
              12-month studio cost (10 FTEs, USD). Most of it is non-engineering
              overhead — not product work.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-surface p-6">
            <div className="text-4xl font-bold text-accent mb-2">539×</div>
            <p className="text-sm text-secondary leading-relaxed">
              Cost ratio between the studio scenario and a two-student
              out-of-pocket bootstrap. Even with opportunity cost included, the
              gap stays at 18×.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE COMPETITIVE MATRIX REVEALS */}
      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-surface">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
          What the Competitive Matrix Reveals
        </h2>
        <div className="space-y-5 text-secondary leading-relaxed max-w-3xl">
          <p>
            Across all five direct competitors — Heads Up!, Spaceteam, Truth or
            Dare, King of Booze, and Never Have I Ever — the same structural
            weakness appears: <span className="text-primary font-medium">content runs out</span>.
            Decks are finite, prompts repeat, and replayability decays after a
            handful of sessions. None of them have built a live-ops content
            engine, because doing so requires the kind of telemetry and player
            base typically associated with online competitive games — not
            casual party apps.
          </p>
          <p>
            That mismatch is the real gap. Live-ops infrastructure has been
            optimized for online, hardcore audiences. Party games — which are
            inherently offline and casual — have been left with shipping a
            static product and hoping word-of-mouth carries it. A party game
            that ships <span className="text-primary font-medium">offline-first but with dynamic, updatable content</span> would
            occupy the empty quadrant.
          </p>
        </div>
      </section>

      {/* COST MODEL HIGHLIGHT */}
      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-surface">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
          The Cost Model
        </h2>
        <p className="text-secondary leading-relaxed mb-6 max-w-3xl">
          A 12-month bottoms-up model comparing two scenarios — a fully-staffed
          studio versus two students bootstrapping the same product. The model
          is built on USD averages from Glassdoor, Levels.fyi, and Indeed, with
          assumptions tagged in blue and formulas in black.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-surface">
                <th className="text-left py-3 px-4 text-sm font-bold text-primary uppercase tracking-wider">
                  Cost Category
                </th>
                <th className="text-right py-3 px-4 text-sm font-bold text-primary uppercase tracking-wider">
                  Studio (C)
                </th>
                <th className="text-right py-3 px-4 text-sm font-bold text-primary uppercase tracking-wider">
                  2 Students (B)
                </th>
              </tr>
            </thead>
            <tbody className="text-secondary">
              <tr className="border-b border-surface/60">
                <td className="py-3 px-4">Personnel (10 FTEs vs. 2 founders)</td>
                <td className="py-3 px-4 text-right font-mono">$1,120,000</td>
                <td className="py-3 px-4 text-right font-mono">$0</td>
              </tr>
              <tr className="border-b border-surface/60">
                <td className="py-3 px-4">Infrastructure & Tools</td>
                <td className="py-3 px-4 text-right font-mono">$84,004</td>
                <td className="py-3 px-4 text-right font-mono">$964</td>
              </tr>
              <tr className="border-b border-surface/60">
                <td className="py-3 px-4">Marketing & UA</td>
                <td className="py-3 px-4 text-right font-mono">$121,000</td>
                <td className="py-3 px-4 text-right font-mono">$0</td>
              </tr>
              <tr className="border-b border-surface/60">
                <td className="py-3 px-4">Overhead (benefits, office, legal)</td>
                <td className="py-3 px-4 text-right font-mono">$380,500</td>
                <td className="py-3 px-4 text-right font-mono">$2,200</td>
              </tr>
              <tr className="border-t-2 border-primary/20 font-bold text-primary">
                <td className="py-4 px-4">Total 12-month cost</td>
                <td className="py-4 px-4 text-right font-mono">$1,705,504</td>
                <td className="py-4 px-4 text-right font-mono">$3,164</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-secondary italic mt-4 max-w-3xl">
          The headline number isn&apos;t engineering cost — it&apos;s
          organizational overhead. Personnel, benefits, and office account for
          ~88% of the studio scenario. The implication: most of what a studio
          spends isn&apos;t building the product, it&apos;s running the
          company that builds it.
        </p>
      </section>

      {/* DELIVERABLES */}
      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-surface">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
          Deliverables
        </h2>

        <div className="flex flex-col gap-4 max-w-sm">
          <a
            href="/circle-panic-market-scan.xlsx"
            download
            className="group bg-white rounded-2xl border border-surface p-6 hover:shadow-md hover:border-accent/30 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                Excel Model
              </h3>
              <svg
                className="w-5 h-5 text-secondary group-hover:text-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Two-sheet workbook: competitive matrix + 12-month cost model with
              live formulas. Download .xlsx
            </p>
          </a>

        </div>
      </section>

      {/* METHOD NOTE */}
      <section className="max-w-4xl mx-auto px-6 py-10 border-t border-surface">
        <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
          Method & Honest Limitations
        </h2>
        <ul className="space-y-3 text-secondary leading-relaxed list-disc pl-5 max-w-3xl">
          <li>
            Competitor data was assembled from App Store metadata, public
            reviews, and third-party tracker estimates. Download numbers are
            given in brackets (e.g. &ldquo;1–5M&rdquo;) rather than point
            estimates because tracker accuracy varies by category.
          </li>
          <li>
            The cost model uses USA salary averages from Glassdoor,
            Levels.fyi, and Indeed. Adjusting for a Türkiye-based studio
            would reduce the studio total by roughly 40–60%, but the cost
            ratio between scenarios stays in the same order of magnitude.
          </li>
          <li>
            Studios don&apos;t publish their CapEx and OpEx for individual
            titles. The cost model is a structured estimate, not an audited
            figure. It is meant to make the gap between scenarios visible,
            not to predict any specific company&apos;s P&amp;L.
          </li>
          <li>
            Circle Panic is a concept — not a shipped product. Its position
            on the perceptual map reflects design intent, not measured
            performance.
          </li>
        </ul>
      </section>

      {/* FOOTER NAV */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-surface">
        <Link
          href="/projects"
          className="text-secondary hover:text-accent flex items-center gap-2 transition-colors"
        >
          ← Back to Projects
        </Link>
      </section>
    </main>
  );
}
