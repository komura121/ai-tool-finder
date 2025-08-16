import CTAButtons from "@/components/CTAButtons";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedGrid from "@/components/FeaturedGrid";

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <section className="pt-16 md:pt-24">
          <h1 className="mx-auto max-w-3xl text-center text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Find the Best AI Tool
            <br className="hidden md:block" />
            for Your Needs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-600 md:mt-6 md:text-lg">Stop wasting time. Let AI recommend the right AI for you.</p>
          <CTAButtons />
        </section>
      </div>
      <div className="px-30">
        <section className="py-10">
          <h2 className="text-center text-2xl font-semibold">Popular Categories</h2>
          <CategoryGrid />
        </section>

        <section className="py-10">
          <p className="mx-auto max-w-3xl text-center text-3xl font-extrabold text-gray-800">Can’t decide? Take our 1‑minute quiz and get personalized AI recommendations.</p>
        </section>

        <section id="tools" className="pb-20">
          <FeaturedGrid />
        </section>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-80 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>
    </main>
  );
}
