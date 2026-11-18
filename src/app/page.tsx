
"use client";

import { useState } from "react";

const categories = [
  {
    name: "Living Room",
    description: "Cozy touches for beautiful spaces",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=85",
  },
  {
    name: "Kitchen",
    description: "Everyday kitchen favourites",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=85",
  },
  {
    name: "Bathroom",
    description: "Refresh your daily routine",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=85",
  },
  {
    name: "Bedroom",
    description: "Comfort in every detail",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=85",
  },
  {
    name: "Storage & Organization",
    description: "Keep everything in its place",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=85",
  },
];

const products = [
  {
    name: "Decorative Home Accents",
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=700&q=85",
  },
  {
    name: "Kitchen Essentials",
    category: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700&q=85",
  },
  {
    name: "Home Storage Collection",
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=85",
  },
  {
    name: "Bathroom Accessories",
    category: "Bathroom",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700&q=85",
  },
  {
    name: "Cozy Bedroom Essentials",
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=85",
  },
];

function DemoImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f7e9ec]">
      {failed ? (
        <div className="flex h-full items-center justify-center p-6 text-center text-sm text-brand">
          Chenai Home Essentials
        </div>
      ) : (
        // Remote demo images; replace with local Next/Image assets later.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${className}`}
        />
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fff9fb] text-[#242124]">
      {/* Announcement */}
      <div className="bg-brand px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        ♡ Beautiful essentials for everyday living ♡
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-100 text-2xl text-brand">
              ♡
            </span>

            <span className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-none text-brand">
                Chenai
              </span>
              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em]">
                Home Essentials
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-9 text-sm font-medium lg:flex">
            <a href="#" className="text-brand">
              Home
            </a>
            <a href="#products" className="transition hover:text-brand">
              Shop
            </a>
            <a href="#categories" className="transition hover:text-brand">
              Categories
            </a>
            <a href="#about" className="transition hover:text-brand">
              About
            </a>
            <a href="#contact" className="transition hover:text-brand">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#products"
              className="hidden rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark sm:inline-flex"
            >
              Shop Now
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="rounded-xl border border-pink-100 p-3 lg:hidden"
            >
              <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-pink-100 bg-white px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-5 text-sm font-medium">
              {[
                ["Home", "#"],
                ["Shop", "#products"],
                ["Categories", "#categories"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="transition hover:text-brand"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#fff9fb] via-[#fff0f5] to-[#f9dce8]">
          <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:min-h-[650px] lg:grid-cols-2 lg:px-10 lg:py-20">
            <div className="max-w-2xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-brand sm:text-sm">
                Welcome to Chenai Home Essentials
              </p>

              <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl">
                Beautiful Spaces
                <span className="mt-2 block text-brand">
                  for Everyday Living ♡
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-base leading-8 text-zinc-600 sm:text-lg">
                Discover stylish and practical home essentials
                to make your space more comfortable,
                organized and beautiful.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-brand px-8 py-4 text-sm font-bold text-white shadow-lg shadow-pink-300/40 transition duration-300 hover:-translate-y-1 hover:bg-brand-dark"
                >
                  Shop Now ↗
                </a>

                <a
                  href="#categories"
                  className="rounded-full border border-brand px-8 py-4 text-sm font-bold text-brand transition duration-300 hover:bg-white"
                >
                  Explore Categories
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-pink-200 pt-6 text-xs font-medium text-zinc-600 sm:text-sm">
                <span>♡ Beautiful Home Styling</span>
                <span>✧ Everyday Essentials</span>
                <span>⌂ Harare, Zimbabwe</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-[3rem] bg-white/40 blur-xl" />

              <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] border-[6px] border-white shadow-2xl shadow-pink-200/50 sm:aspect-[6/5]">
                <DemoImage
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=90"
                  alt="Beautifully styled modern home interior"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-6 py-4 shadow-xl sm:-left-5">
                <p className="text-xs font-bold uppercase tracking-widest text-brand">
                  Chenai Home Essentials
                </p>
                <p className="mt-1 text-sm font-medium">
                  Little details. Beautiful living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section
          id="categories"
          className="scroll-mt-24 mx-auto max-w-7xl px-5 py-20 lg:px-10"
        >
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
                Explore our collections
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                Shop by Category
              </h2>
              <p className="mt-3 text-sm text-zinc-500">
                Find the essentials for every room in your home.
              </p>
            </div>

            <a
              href="#products"
              className="text-sm font-bold text-brand hover:underline"
            >
              View Featured Essentials →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#products"
                className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-100"
              >
                <div className="aspect-[4/4.5] overflow-hidden">
                  <DemoImage
                    src={category.image}
                    alt={category.name}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold sm:text-base">
                      {category.name}
                    </h3>
                    <span className="text-lg text-brand transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    {category.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Featured products */}
        <section
          id="products"
          className="scroll-mt-24 bg-white px-5 py-20 lg:px-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
                  A little inspiration
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
                  Featured Essentials
                </h2>
                <p className="mt-3 text-sm text-zinc-500">
                  A preview of the beautiful collections we can showcase.
                </p>
              </div>
              <span className="rounded-full bg-pink-50 px-4 py-2 text-xs font-semibold text-brand">
                Sample Collection
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="group overflow-hidden rounded-3xl border border-pink-100 bg-[#fff9fb] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-100"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <DemoImage
                      src={product.image}
                      alt={product.name}
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand shadow-sm">
                      Demo
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-brand">
                      {product.category}
                    </p>
                    <h3 className="mt-1 text-sm font-bold leading-6">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-500">
                      Sample display • Price to be confirmed
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-zinc-500">
              Demonstration products and photographs. Actual items,
              prices and availability will be confirmed by the shop.
            </p>
          </div>
        </section>

        {/* Lifestyle banner */}
        <section className="bg-[#fce8ef] px-5 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-pink-200/40">
              <div className="aspect-[5/4]">
                <DemoImage
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=85"
                  alt="Stylish home interior inspiration"
                />
              </div>
            </div>

            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
                Your home, your happy place
              </p>
              <h2 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                It's the little things that make a house a home.
              </h2>
              <p className="mt-6 leading-8 text-zinc-600">
                From clever storage solutions to lovely finishing
                touches, find inspiration for spaces that feel
                warm, welcoming and uniquely yours.
              </p>
              <a
                href="#categories"
                className="mt-8 inline-flex rounded-full bg-brand px-8 py-4 text-sm font-bold text-white transition hover:bg-brand-dark"
              >
                Explore Collections →
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 px-5 py-20 text-center lg:px-10"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
              Welcome to Chenai
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
              Beautiful Living Starts at Home ♡
            </h2>
            <p className="mt-6 leading-8 text-zinc-600">
              Explore home essentials and lifestyle inspiration
              from Chenai Home Essentials. Visit our shop in
              Harare and discover ideas for making everyday
              living a little more beautiful.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className="scroll-mt-24 bg-[#242124] px-5 py-16 text-white lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-3xl font-bold text-pink-300">
              Chenai ♡
            </h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.25em]">
              Home Essentials
            </p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-400">
              Beautiful essentials for everyday living.
              Discover inspiration for every corner of your home.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
              <a href="#" className="hover:text-pink-300">
                Home
              </a>
              <a href="#categories" className="hover:text-pink-300">
                Categories
              </a>
              <a href="#products" className="hover:text-pink-300">
                Featured Essentials
              </a>
              <a href="#about" className="hover:text-pink-300">
                About
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Visit Our Store</h3>
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              55 Fife Avenues Mall
              <br />
              Harare, Zimbabwe
            </p>
            <a
              href="tel:+263774488351"
              className="mt-4 block text-sm text-pink-300 hover:text-white"
            >
              0774 488 351
            </a>
            <a
              href="tel:+263773129543"
              className="mt-2 block text-sm text-pink-300 hover:text-white"
            >
              0773 129 543
            </a>
            <a
              href="https://wa.me/263774488351"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              Chat on WhatsApp ↗
            </a>
          </div>
        </div>

       
<div className="mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center text-xs text-zinc-400 sm:flex-row">
  <p>
    © {new Date().getFullYear()} Chenai Home Essentials.
    All rights reserved.
  </p>

  <p className="flex items-center gap-1.5">
    Designed & Developed by
    <span className="font-bold tracking-wide text-pink-300 transition-colors duration-300 hover:text-white">
      Silent Programs
    </span>
    <span className="text-pink-400">♥</span>
  </p>
</div>

      </footer>
    </div>
  );
}
