# AI Engineer Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing AI/ML projects, certifications, and skills.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive for mobile and desktop
- ⚡ Built with Next.js 15 for optimal performance
- 🎯 Sections: About, Projects, Certifications, Skills, Contact
- 🚀 Ready for deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhishekthreddy/My_Portfolio.git
cd My_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

```bash
npm run build
npm run start
```

## Deployment on Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Abhishekthreddy/My_Portfolio)

### Manual Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Deploy via Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import the `My_Portfolio` repository
5. Vercel will automatically detect Next.js and configure build settings
6. Click "Deploy"

Your portfolio will be live in minutes!

## Customization

Edit the following files to personalize your portfolio:

- `app/page.tsx` - Update content, projects, certifications, and skills
- `app/layout.tsx` - Modify site metadata and title
- `app/globals.css` - Customize colors and styles

## Technologies Used

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Fonts:** Geist Sans & Geist Mono

## Project Structure

```
My_Portfolio/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── public/               # Static assets
├── package.json          # Dependencies
└── README.md            # Documentation
```

## License

This project is open source and available under the MIT License.

## Contact

For any inquiries, please reach out via the contact section on the portfolio website.
