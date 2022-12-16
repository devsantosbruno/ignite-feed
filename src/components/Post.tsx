import { useState } from "react";
import { Comment } from "./Comment";

export function Post(props: any) {
  const [quantity, setQuantity] = useState(0);

  return (
    <article className="bg-gray-800 rounded-lg p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://github.com/devsantosbruno.png"
            className="w-16 h-16 rounded-lg border-4 border-gray-800 outline outline-2 outline-green-500"
          />
          <div className="flex flex-col">
            <strong className="text-gray-100 leading-6">Bruno Santos</strong>
            <span className="text-sm text-gray-400 leading-6">
              Web Developer
            </span>
          </div>
        </div>

        <time
          title="11 de Maio às 08:13h"
          dateTime="2022-06-11 08:13:30"
          className="text-sm text-grey-400"
        >
          Públicado há 1h
        </time>
      </header>

      <div className="leading-6 mt-6 flex flex-col gap-4">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉{" "}
          <a
            href="#"
            className="font-bold text-green-500 hover:text-green-300 transition duration-150"
          >
            jane.design/doctorcare
          </a>
        </p>
        <p>
          <a
            href="#"
            className="font-bold text-green-500 hover:text-green-300 transition duration-150"
          >
            #novoprojeto
          </a>{" "}
          <a
            href="#"
            className="font-bold text-green-500 hover:text-green-300 transition duration-150"
          >
            #nlw
          </a>{" "}
          <a
            href="#"
            className="font-bold text-green-500 hover:text-green-300 transition duration-150"
          >
            #rocketseat
          </a>
        </p>
      </div>

      <form className="w-full mt-6 pt-6 border-t-[1px] border-gray-600">
        <strong className="leading-6 text-gray-100">Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          onChange={(event) => setQuantity(event.target.value.length)}
          className="w-full bg-gray-900 border-none resize-none h-24 p-4 rounded-lg text-gray-100 leading-6 mt-4 focus:outline-none focus:outline focus:outline-2 focus:outline-green-500"
        />

        <footer className={quantity == 0 ? "invisible h-0" : "visible h-auto"}>
          <button
            type="submit"
            className="py-3 px-6 mt-4 rounded-lg border-none bg-green-500 hover:bg-green-300 transition duration-150 text-white font-bold cursor-pointer"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className="mt-8">
        <Comment />
      </div>
    </article>
  );
}
