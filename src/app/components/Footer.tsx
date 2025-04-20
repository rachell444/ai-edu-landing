'use client';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a23] text-gray-400 px-6 py-6 md:py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-sm text-left">
          © 2025 Rachell Moron
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 rounded-md bg-[#141432] hover:bg-[#1f1f47] text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12a12.01 12.01 0 008.21 11.39c.6.11.82-.26.82-.58v-2.02c-3.34.72-4.04-1.61-4.04-1.61-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.06 1.83 2.8 1.3 3.48.99.11-.78.41-1.3.74-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.53-1.52.12-3.16 0 0 1-.32 3.29 1.23A11.47 11.47 0 0112 5.8c1.02.01 2.05.14 3.01.41 2.3-1.55 3.28-1.23 3.28-1.23.65 1.64.25 2.86.12 3.16.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.23v3.3c0 .32.2.7.83.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-md bg-[#141432] hover:bg-[#1f1f47] text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.96 0-1.72-.78-1.72-1.72s.78-1.72 1.72-1.72 1.72.78 1.72 1.72-.77 1.72-1.72 1.72zm13.5 11.28h-3v-5.5c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.59h-3v-10h2.88v1.37h.04c.4-.76 1.36-1.56 2.8-1.56 2.99 0 3.55 1.97 3.55 4.53v5.66z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
