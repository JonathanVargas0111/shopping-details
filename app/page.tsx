import Categories from "./components/Categories/Categories";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-4xl text-center m-20 text-purple-800 font-bold">Shopping Details</h1>
      <Categories />
      <section className="w-full p-4 md:p-36 text-center">
        <h2 className="font-bold text-3xl my-10 md:text-4xl">
          Desayunos sorpresa, detalles y anchetas
        </h2>
        <p className="text-2xl my-5">
          Horario de Atención:
        </p>
        <p className="my-5">Lunes a Sábado de 7 AM a 7 PM y los domingos de 9 AM a 6 PM.</p>
      </section>

      <section className="w-full p-4 md:p-36 text-center">
        <h2 className="font-bold text-3xl my-10 md:text-4xl">
          Contactanos
        </h2>
        <p className="text-2xl my-5">
        Dudas, sugerencias e inquietudes, puedes poner en contacto a traves del siguiente enlace
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto md:w-48">
          Contáctenos
        </button>
      </section>

      <section className="w-full p-4 md:p-36 text-center bg-black text-white">
        <h2 className="font-bold text-3xl my-10 md:text-4xl">
          Acerca de nosotros
        </h2>
        <p className="text-2xl my-5">
        Sopping Detail, apasionados creadores de detalles encantadores, diseñando momentos memorables en cada desayuno y en exquisitas anchetas regalo.
        </p>
      </section>

    </main>
  );
}
