import Image from "next/image";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Git Commit Go | Blog",
  description: "A quick guide on how to interact with GitHub programmatically using their REST API.",
  openGraph: {
    title: "Git Commit Go | Blog",
    description: "A quick guide on how to interact with GitHub programmatically using their REST API.",
    url: "/blog/git-commit-go",
    images: ["/post_covers/post5.svg"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Git Commit Go | Blog",
    description: "A quick guide on how to interact with GitHub programmatically using their REST API.",
    images: ["/post_covers/post5.svg"],
  },
};

export default function BlogPost() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#F7F6F4] font-mono px-6 pt-28 md:pt-32 pb-16 w-full">
      <div className="max-w-3xl w-full flex flex-col items-center gap-8">
        
        {/* Back link */}
        <div className="w-full max-w-2xl flex justify-start">
          <Link href="/blog" className="text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-2 w-fit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to blog
          </Link>
        </div>

        {/* Big Cover Image - wider than written content */}
        <div className="w-full max-w-3xl h-[340px] sm:h-[400px] md:h-[440px] relative rounded-2xl overflow-hidden border border-zinc-200 shadow-xs">
          <Image
            src="/post_covers/post5.svg"
            alt="Git Commit Go"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Article Content Container */}
        <article className="max-w-2xl w-full text-left flex flex-col gap-10">
          
          {/* Header */}
          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">Development</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">GitHub</span>
              <span className="px-2 py-1 text-xs font-semibold bg-[#E5D4FF] text-zinc-900 rounded-md">API</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)] leading-tight">
                Git Commit Go
              </h1>
              <p className="text-xl text-zinc-600 italic">
                exploring curiously, one commit at a time
              </p>
            </div>

            <div className="flex items-center justify-between w-full text-sm text-zinc-500 pt-1 border-b border-zinc-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span>July 11, 2026</span>
                <span aria-hidden="true">&bull;</span>
                <span>3 min read</span>
              </div>
              <ShareButton title="Git Commit Go" />
            </div>
          </header>

        {/* Content */}
        <div className="prose prose-zinc font-mono text-zinc-700 flex flex-col gap-8 text-lg leading-relaxed">
          
          <p>At some point, just committing code isn’t enough.</p>
          <p>You start wondering:</p>
          <blockquote className="border-l-4 border-purple-400 pl-4 italic text-zinc-600 my-4">
            can I interact with GitHub programmatically?
          </blockquote>
          
          <p>That’s where the <strong>GitHub REST API</strong> comes in.</p>
          
          <div className="flex flex-col gap-2">
            <p>It lets you:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>create repositories automatically</li>
              <li>fetch repository data</li>
              <li>automate workflows</li>
              <li>build tools that interact with GitHub</li>
              <li>understand what’s happening behind the UI</li>
            </ul>
          </div>

          <p className="font-bold">Let’s walk through the basics.</p>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">What is the GitHub REST API?</h2>
            <p>The GitHub REST API allows developers to communicate with GitHub using HTTP requests.</p>
            <p>Instead of clicking buttons on GitHub’s website, you can send requests like:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li><strong>GET</strong> → retrieve data</li>
              <li><strong>POST</strong> → create data</li>
              <li><strong>PATCH</strong> → update data</li>
              <li><strong>DELETE</strong> → remove data</li>
            </ul>
            <p className="italic text-zinc-500 mt-2">Think of it as a bridge between your application and GitHub.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Step 1 — Choose an endpoint</h2>
            <p>GitHub provides many API endpoints depending on what you want to do.</p>
            <p>Example endpoint for repositories:</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">https://api.github.com/user/repos</code>
            </div>
            <p>This endpoint allows you to retrieve repositories connected to your account.</p>
            
            <p className="mt-4">Each endpoint defines:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>request method</li>
              <li>parameters</li>
              <li>response structure</li>
            </ul>
            <p className="mt-4">Documentation:</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">https://docs.github.com/en/rest/repos/repos</code>
            </div>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Step 2 — Generate a Personal Access Token (PAT)</h2>
            <p>GitHub requires authentication for most API requests.</p>
            <p>We generate a Personal Access Token.</p>
            <p className="mt-4">Steps:</p>
            <ol className="list-decimal ml-5 space-y-2 text-zinc-600">
              <li>Go to GitHub Settings</li>
              <li>Scroll to Developer Settings</li>
              <li>Select Personal Access Tokens</li>
              <li>Generate new token</li>
            </ol>
            <p className="mt-4">Choose:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>token name</li>
              <li>expiration duration</li>
              <li>required permissions</li>
            </ul>
            <p className="font-bold mt-4 text-red-500">Copy the token immediately.</p>
            <p>GitHub will not show it again.</p>
            <p>Treat it like a password.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Step 3 — Send request using Postman</h2>
            <p>Postman helps test API requests easily.</p>
            <p>Example GET request:</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-blue-600">https://api.github.com/user/repos</code>
            </div>
            <p className="mt-4">Add Authorization header:</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <code className="text-green-600">Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN</code>
            </div>
            <p>Send request.</p>
            <p>GitHub returns data in JSON format.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Example — create repository via API</h2>
            <p>POST request:</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <pre className="text-blue-600 whitespace-pre">
{`curl -X POST https://api.github.com/user/repos \\
-H "Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN" \\
-H "Accept: application/vnd.github+json" \\
-d '{"name":"my-new-repo","private":false}'`}
              </pre>
            </div>
            <p>Replace <code>YOUR_PERSONAL_ACCESS_TOKEN</code> with your token.</p>
            <p>Replace <code>my-new-repo</code> with repository name.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Example response</h2>
            <p>GitHub responds with structured JSON data:</p>
            <div className="bg-zinc-100 p-4 rounded-lg border border-zinc-200 text-sm overflow-x-auto">
              <pre className="text-indigo-600 whitespace-pre">
{`{
  "name": "my-new-repo",
  "private": false,
  "owner": {
    "login": "username"
  }
}`}
              </pre>
            </div>
            <p>The API confirms repository creation and returns metadata.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Why learn GitHub API?</h2>
            <p>Understanding the API allows you to:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>automate workflows</li>
              <li>build developer tools</li>
              <li>create dashboards</li>
              <li>manage repositories programmatically</li>
              <li>integrate GitHub with apps</li>
            </ul>
            <p className="mt-4">Git becomes more than version control.</p>
            <p>It becomes programmable infrastructure.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">Mental model</h2>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li><strong>Git CLI</strong> → manage code locally</li>
              <li><strong>GitHub UI</strong> → manage repos visually</li>
              <li><strong>GitHub API</strong> → manage everything programmatically</li>
            </ul>
          </div>

          <hr className="border-zinc-200 my-4" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-900 [font-family:var(--font-dm-sans)]">If you're just starting</h2>
            <p>Focus on understanding:</p>
            <ul style={{ listStyleType: '"+ "' }} className="ml-5 space-y-2 text-zinc-600">
              <li>request</li>
              <li>response</li>
              <li>authentication</li>
            </ul>
            <p className="mt-4">Everything else becomes easier with practice.</p>
          </div>

          <hr className="border-zinc-200 my-4" />

          <p className="font-bold text-zinc-900 text-xl pb-8">
            Exploring curiously, one commit at a time 🚀
          </p>

        </div>
      </article>
      </div>
    </div>
  );
}
