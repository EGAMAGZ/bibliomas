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
        <h1 class="mt-10 font-sans text-5xl font-bold ">Acerca de nosotros</h1>
      </div>
      <div class="hero min-h-screen bg-slate-100 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
            <p class="font-sans py-6">¡Bienvenido a Sycorax Corp!</p>
            <p class="font-sans py-6">
              En el vertiginoso mundo académico y profesional, la gestión
              eficiente de referencias bibliográficas es esencial para el éxito
              y la credibilidad. En Sycorax Corp, entendemos la importancia de
              simplificar este proceso crucial, permitiéndote centrarte en lo
              que realmente importa: tu investigación.
            </p>
            <p class="font-sans py-6">
              En Sycorax Corp, nos enorgullece ofrecer una herramienta que va
              más allá de la simple organización de citas. Con características
              innovadoras y una interfaz amigable, nuestro gestor de referencias
              bibliográficas te ayuda a mantener la coherencia, evita errores y
              facilita la colaboración en equipo.
            </p>
            <p class="font-sans py-6">
              Explora el futuro de la gestión de referencias bibliográficas con
              Sycorax Corp. Únete a nosotros mientras transformamos la manera en
              que accedes, organizas y compartes tus fuentes, permitiéndote
              destacar en tu investigación y alcanzar nuevos niveles de
              excelencia.
            </p>
            <p class="font-sans py-6">
              Descubre la diferencia con Sycorax Corp. Simplifica tu trabajo.
              Eleva tu investigación.
            </p>
          </div>
          <img src="/img/computer.jpg" class="max-w-lg rounded-lg shadow-2xl" />
        </div>
      </div>
      <Footer />
      {
        /*<Button state="btn-primary" type="button">
        <span>Clickeame</span>
      </Button>
      <div class="bg-[#50d71e]">
        <nav class="navbar font-mono">hola buenos dias</nav>  botttones y taps
        <h1 class="font-sans">Hola mundo</h1>
        <IconGenderMale size={48} />
        <img src="/img/computer.jpg" />
      </div>*/
      }
    </>
  );
}
