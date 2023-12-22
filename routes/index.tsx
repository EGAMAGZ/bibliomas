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
        <h1 class="mt-10 font-sans text-5xl font-bold ">
          Bienvenido a Bibliomas
        </h1>
      </div>
      <div class="hero min-h-screen bg-slate-100 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="/img/persona.jpg" class="max-w-lg rounded-lg shadow-2xl" />
          <div>
            {/*<h1 class="font-sans text-5xl font-bold">Bienvenido a BIBLIOMAS</h1>*/}
            <p class="font-sans py-6">
              Bienvenido a nuestro generador de referencias bibliográficas, una
              herramienta indispensable para simplificar el proceso de citar
              fuentes y construir bibliografías de manera precisa. Nos
              enorgullece ofrecerte una solución eficiente y fácil de usar para
              organizar y presentar correctamente la información de tus fuentes
              académicas.
            </p>
            <p class="font-sans py-6">
              Ya sea que estés redactando un ensayo, artículo científico o
              cualquier otro trabajo académico, sabemos que citar correctamente
              es esencial para respaldar tu investigación y dar crédito a las
              ideas de otros. Nuestra plataforma está diseñada para facilitar
              este proceso, permitiéndote concentrarte en el contenido de tu
              trabajo sin preocuparte por los detalles técnicos de las citas.
            </p>
            <p class="font-sans py-6">
              Explora nuestras funciones intuitivas que te guiarán a través de
              los diferentes formatos de citas, desde libros y artículos hasta
              recursos en línea. Ya seas estudiante, investigador o profesional,
              nuestro generador de referencias está aquí para simplificar tu
              experiencia y garantizar la integridad académica de tus trabajos.
            </p>
            <p class="font-sans text-lg">
              ¡Comienza ahora y experimenta la comodidad de crear referencias
              bibliográficas precisas con tan solo unos clics!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
