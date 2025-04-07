export default function Footer() {
  return (
    <footer className="bg-neutral dark:bg-gray-800 mt-12 py-6 px-4">
      <div className="container mx-auto text-center text-text-medium dark:text-gray-300 text-sm">
        <p>&copy; {new Date().getFullYear()} Operation Nicole Aquino. All poems curated with love.</p>
        <p className="mt-2">All rights reserved.</p>
      </div>
    </footer>
  );
}
