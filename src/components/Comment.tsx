import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className="mt-6 flex gap-4">
      <Avatar githubUser="devsantosbruno" size={16} />

      <div className="w-full">
        <div className="bg-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm leading-3">Bruno Santos</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime="2022-06-11 08:13:30"
                className="text-xs leading-6 text-gray-400"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button
              title="Deletar comentário"
              className="bg-none border-none text-gray-400 hover:text-red-500 transition duration-150 rounded-sm"
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4">Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer className="mt-4">
          <button className="bg-none border-none text-gray-400 hover:text-green-300 transition duration-150 flex items-center gap-2 rounded-sm">
            <ThumbsUp />
            Aplaudir
            <span className="before:content-['\2022'] before:py-0 before:mr-2">
              20
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
