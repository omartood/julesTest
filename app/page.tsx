import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 font-[family-name:var(--font-geist-sans)] dark:bg-gray-900">
      <header className="text-center py-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">Welcome to My Personal Landing Page</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-2">A brief introduction about myself.</p>
      </header>

      <section className="my-12 flex justify-center">
        <Image
          src="/profile-placeholder.svg"
          alt="Profile picture placeholder"
          width={160}
          height={160}
          className="rounded-full shadow-lg"
        />
      </section>

      <section id="about" className="my-12 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">About Me</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Details about me...</p>
      </section>

      <section id="projects" className="my-12 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Projects</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">Details about my projects...</p>
      </section>

      <section id="contact" className="my-12 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Contact</h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">How to reach me...</p>
      </section>

      <footer className="text-center py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} My Name</p>
      </footer>
    </div>
  );
}
