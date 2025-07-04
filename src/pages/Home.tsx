import SectionIEEE from '../pages/home/SectionIEEE';

function Home() {
  return (
      <>
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white text-blue-900">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Bem-vindo à IEEE IPLeiria
          </h1>
          <p className="text-lg sm:text-xl max-w-xl mb-6">
            Somos uma comunidade académica dedicada à inovação, tecnologia e desenvolvimento de competências — feita por estudantes, para estudantes.
          </p>
          <a
            href="#"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Junta-te a nós
          </a>
        </section>

        <SectionIEEE />

      </>


  );
}

export default Home;
