import { RouteConfig } from "$fresh/server.ts";
import Startnav from "@/components/Starnav.tsx";
import Footer from "@/components/Footer.tsx";

export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

export default function Home() {
  return (
    <>
      <Startnav />
      <div class="hero bg-slate-100 ">
        <h1 class="mt-5 font-sans text-5xl font-bold ">
          Suscripciones a Bibliomas
        </h1>
      </div>

      <div class="hero min-h-screen bg-slate-100 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="/img/libro.jpg" class="max-w-2xl rounded-lg shadow-2xl" />

          <div class="flex flex-col space-y-4 mx-5">
            <div class=" card w-96 bg-gray-400 shadow-xl image-full">
              <figure>
                <img
                  src="/img/onebook.jpg"
                  alt="Abook"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title font-sans text-slate-200 text-3xl">Paquete estándar</h2>
                <p class="font-sans text-slate-200 text-xl">$100.00/mes</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary font-sans">Suscribete</button>
                </div>
              </div>
            </div>
            <div class=" card w-96 bg-gray-500 shadow-xl image-full">
              <figure>
                <img
                  src="/img/books.jpg"
                  alt="Books"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title font-sans text-slate-200 text-3xl">Paquete empresarial</h2>
                <p class="font-sans text-slate-200 text-xl">$2000.00/mes</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary font-sans">Suscribete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
