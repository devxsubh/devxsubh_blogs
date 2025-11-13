# Devxsubh Blog - Personal Portfolio & Blog

A modern, high-performance blog and portfolio website built with Next.js 15, featuring a beautiful UI, advanced SEO optimization, and seamless content management.

🌐 **Live Site**: [devxsubh.com](https://www.devxsubh.com)

## About

This is my personal blog and portfolio website where I share insights on web development, AI/ML engineering, full-stack development, and my journey as a developer. Built with modern web technologies and best practices for performance, SEO, and user experience.

## Features

### 🚀 Performance & SEO
- **Server-Side Rendering**: Lightning-fast page loads using Next.js 15 Server Components
- **Advanced SEO**: Comprehensive metadata, Open Graph tags, Twitter cards, and structured data (JSON-LD)
- **Automatic Sitemap**: Dynamic sitemap generation for better search engine indexing
- **Open Graph Images**: Automatic OG image generation for social media sharing
- **Robots.txt**: Properly configured for search engine crawlers

### 📝 Content Management
- **Wisp CMS Integration**: Seamless content management with a medium-like writing experience
- **Full-Text Search**: Search across all blog posts
- **Category Filtering**: Organize posts by tags and categories
- **Related Posts**: AI-powered related post suggestions
- **RSS Feed**: Subscribe to updates via RSS

### 🎨 Design & UX
- **Responsive Design**: Perfectly optimized for all devices (desktop, tablet, mobile)
- **Customizable Themes**: Multiple theme options with gradient support
- **Table of Contents**: Auto-generated TOC for better article navigation
- **Modern UI**: Built with Tailwind CSS and Shadcn UI components
- **Dark Mode Support**: Theme switching capability

### 🔗 Social Integration
- **Social Media Links**: Integrated LinkedIn, Twitter/X, GitHub, Medium profiles
- **Author Attribution**: Proper author schema with social profile links
- **Social Sharing**: Optimized Open Graph and Twitter card metadata

## Tech Stack

- **[Next.js 15](https://nextjs.org/blog/next-15)** - React framework with App Router, TypeScript & Turbopack
- **[Wisp CMS](https://wisp.blog/)** - Modern headless CMS for blog content management
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautiful, accessible UI components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[ESLint](https://eslint.org/)** - Code quality and linting
- **Font Optimization** - Using Next.js font optimization

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── post/         # Blog post pages
│   │   ├── category/     # Category/tag pages
│   │   └── api/          # API routes (OG images, RSS)
│   ├── components/        # React components
│   │   ├── ui/           # Shadcn UI components
│   │   └── ...           # Custom components
│   ├── lib/              # Utility functions
│   └── config.ts         # Site configuration
├── public/               # Static assets
└── ...                   # Configuration files
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Wisp CMS account (for content management)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devxsubh/nextjs-corporate-blog-starter.git
cd nextjs-corporate-blog-starter
```

2. Install dependencies:
```bash
npm i --legacy-peer-deps
```

**Note**: The `--legacy-peer-deps` flag is required due to React 19 compatibility with some dependencies.

3. Set up environment variables:
```bash
cp .env.example .env
```

Update `.env` with your configuration:
```env
NEXT_PUBLIC_BLOG_ID=your_wisp_blog_id
NEXT_PUBLIC_BASE_URL=https://devxsubh.com
NEXT_PUBLIC_BLOG_ORGANIZATION=Devxsubh
NEXT_PUBLIC_BLOG_TITLE=Devxsubh
NEXT_PUBLIC_BLOG_DESCRIPTION=Your blog description
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Site Settings

Edit `src/config.ts` to customize:
- Site title and description
- Social media links (LinkedIn, Twitter, GitHub, Medium)
- Base URL
- Categories and tags
- Organization name

### SEO Settings

SEO metadata is configured in:
- `src/app/layout.tsx` - Root layout metadata
- `src/app/page.tsx` - Home page metadata
- `src/app/post/[slug]/page.tsx` - Individual post metadata
- `src/app/category/[tag]/page.tsx` - Category page metadata

### Themes

Customize the blog theme by editing the `FullWidthHeader` component or visit `/theme` to preview and generate custom gradient themes.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

The site will automatically deploy on every push to the main branch.

### Other Platforms

This project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Features in Detail

### SEO Optimization

- **Metadata**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD schema for blog posts
- **Open Graph**: Rich social media previews
- **Twitter Cards**: Optimized Twitter sharing
- **Canonical URLs**: Proper URL canonicalization
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawler configuration

### Content Features

- **Markdown Support**: Full markdown rendering with syntax highlighting
- **Custom Components**: Render custom React components from CMS
- **Image Optimization**: Next.js Image component for optimized images
- **Code Highlighting**: Syntax highlighting for code blocks
- **Table of Contents**: Auto-generated TOC for long articles

## Contributing

This is my personal blog project, but I'm open to suggestions and improvements! Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests for improvements
- Share feedback and ideas

## License

This project is open source and available under the [MIT License](LICENSE).

## Connect With Me

- 🌐 **Website**: [devxsubh.com](https://www.devxsubh.com)
- 💼 **LinkedIn**: [linkedin.com/in/devxsubh](https://www.linkedin.com/in/devxsubh)
- 🐦 **Twitter/X**: [@devxsubh](https://x.com/devxsubh)
- 💻 **GitHub**: [github.com/devxsubh](https://github.com/devxsubh)
- 📝 **Medium**: [devxsubh.medium.com](https://devxsubh.medium.com)

---

**Built with ❤️ by Subham Mahapatra**

*Creating with intent. Coding with clarity. Designing with emotion.*
