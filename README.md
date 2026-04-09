# Abdull Manan - Portfolio

A modern, animated portfolio website for **Abdull Manan**, an AI Engineer specializing in building intelligent systems and high-performance applications.

**🌐 [Visit the Live Website](https://abdullmanan.xyz/)**

## 🌟 Features

- **Smooth Animations** - Beautiful page transitions and component animations using Framer Motion
- **Dark Theme** - Sleek dark mode design with teal accent color (#26d9c7)
- **Responsive Design** - Fully mobile-responsive layout using Tailwind CSS
- **Projects Showcase** - Display your projects with descriptions and source links
- **Skills Section** - Showcase your technical stack and languages
- **Contact Form** - Functional contact form with email notifications
- **Modern Tech Stack** - Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **UI Components** - Pre-built UI components from shadcn/ui
- **Analytics** - Integrated Vercel Analytics for tracking

## 🛠️ Tech Stack

### Frontend
- **Next.js** 16.2 - React framework with App Router
- **React** 19 - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Backend
- **Node.js/Next.js API Routes** - Server-side functionality
- **Nodemailer** - Email sending

### UI Components
- **shadcn/ui** - Pre-built accessible components
- **Radix UI** - Unstyled, accessible primitive components
- **Sonner** - Toast notifications

### Form & Validation
- **React Hook Form** - Flexible form validation
- **Zod** - TypeScript-first schema validation

### Other Tools
- **Vercel Analytics** - Usage analytics
- **NextThemes** - Theme management

## 📋 Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── about/
│   ├── projects/            # Projects page
│   ├── contact/             # Contact page
│   └── api/
│       └── contact/         # Contact form API endpoint
├── components/
│   ├── hero.tsx             # Hero section
│   ├── projects-preview.tsx # Featured projects
│   ├── skills.tsx           # Skills showcase
│   ├── contact-form.tsx     # Contact form component
│   ├── header.tsx           # Navigation header
│   ├── footer.tsx           # Footer
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
├── styles/                  # Global stylesheets
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manan-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NODE_ENV=development
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_USER=your_smtp_username
   SMTP_PASSWORD=your_smtp_password
   CONTACT_EMAIL=email_to_receive_messages@example.com
   ```

   For email functionality, you'll need:
   - SMTP server credentials (Gmail, SendGrid, etc.)
   - A verified email address to receive contact messages

   Example with Gmail:
   - `SMTP_HOST`: smtp.gmail.com
   - `SMTP_PORT`: 587
   - `SMTP_USER`: your-email@gmail.com
   - `SMTP_PASSWORD`: [app-specific password](https://myaccount.google.com/apppasswords)

4. **Run the development server**
   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Pages

- **Home** (`/`) - Hero section, projects preview, and skills showcase
- **Projects** (`/projects`) - Detailed project cards with descriptions
- **Contact** (`/contact`) - Contact form and social links
- **About** (`/about`) - About page (if configured)

## 🎨 Customization

### Theme Colors
Edit the CSS variables in [app/globals.css](app/globals.css):
```css
:root {
  --primary: #26d9c7;        /* Teal accent */
  --background: #0a0a0a;     /* Dark background */
  --foreground: #f5f5f5;     /* Light text */
  /* ... other colors ... */
}
```

### Content Updates
- **Hero Section** - Edit [components/hero.tsx](components/hero.tsx)
- **Skills** - Update [components/skills.tsx](components/skills.tsx)
- **Projects** - Modify [app/projects/page.tsx](app/projects/page.tsx)
- **Contact Info** - Edit [app/contact/page.tsx](app/contact/page.tsx)

## 📦 Building for Production

```bash
pnpm build
pnpm start
```

## 🔌 API Endpoints

### Contact Form
- **Endpoint**: `POST /api/contact`
- **Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "message": "string"
  }
  ```
- **Response**: Success or error message

## 📊 Performance

- Optimized images using Next.js `Image` component
- Code splitting with Next.js dynamic imports
- CSS minification with Tailwind CSS
- Analytics tracking for performance monitoring

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Credits

**Original Developer**: [Pratyush Kumar](https://github.com/pratyush0898)  
This portfolio was created by Pratyush Kumar for his friend **Abdull Manan**.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For issues or questions regarding this portfolio template, please create an issue in the repository.

---

**Made with ❤️ by Pratyush Kumar**
