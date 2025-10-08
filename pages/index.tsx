import Head from 'next/head';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mark Alan Prior</title>
        <meta name="description" content="Personal projects and adventures of Mark Alan Prior" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col bg-white">
        {/* Header */}
        <header className="py-8 md:py-12 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Image
                src="/profile_med.PNG"
                alt="Mark Alan Prior"
                width={150}
                height={150}
                className="rounded-full mx-auto object-cover shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Mark Alan Prior
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light">
              Build. Explore. Learn. Guide
            </p>
          </div>
        </header>

        {/* Projects Grid */}
        <section className="flex-grow py-6 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video relative bg-gray-100">
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-200 mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <a 
              href="mailto:mark@markalanprior.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              mark@markalanprior.com
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}

