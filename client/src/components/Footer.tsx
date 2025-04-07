export default function Footer() {
  return (
    <footer className="content-overlay mt-12 py-6 px-4 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-soft-green dark:text-soft-green font-medium">&copy; {new Date().getFullYear()} Operation Nicole Aquino</p>
        <p className="mt-2 text-text-medium dark:text-gray-300 text-sm">All poems curated with love. All rights reserved.</p>
      </div>
    </footer>
  );
}
