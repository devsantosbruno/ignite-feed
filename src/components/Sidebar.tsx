import { PencilLine } from "phosphor-react";
import coverProfile from "../assets/cover-profile.avif";

export function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        src={coverProfile}
        className="w-full h-24 object-cover object-center"
      />
      <div className="flex flex-col items-center text-gray-300 -mt-8">
        <img
          src="https://github.com/devsantosbruno.png"
          className="w-20 h-20 rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"
        />
        <strong className="mt-4 text-gray-100 leading-6">Bruno Santos</strong>
        <span className="text-sm text-gray-400 leading-6">Web Developer</span>
      </div>

      <footer className="border-t-[1px] border-gray-600 mt-6 pt-6 px-8 pb-8">
        <a
          href="#"
          className="w-full bg-transparent text-sm text-green-500 border-[1px] border-green-500 hover:bg-green-500 hover:text-white transition duration-100 rounded-lg h-12 px-5 font-bold flex items-center justify-center gap-2"
        >
          <PencilLine size={17} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
