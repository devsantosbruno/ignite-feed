import { PencilLine } from "phosphor-react";
import coverProfile from "../assets/cover-profile.avif";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        src={coverProfile}
        className="w-full h-24 object-cover object-center"
      />

      <div className="flex flex-col items-center -mt-8">
        <Avatar githubUser="devsantosbruno" size={20} hasOutline />
        <strong className="mt-4 text-gray-100 leading-6">Bruno Santos</strong>
        <span className="text-sm text-gray-400 leading-6">Web Developer</span>
      </div>

      <footer className="border-t-[1px] border-gray-600 mt-6 pt-6 px-5 lg:px-8 pb-8">
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
