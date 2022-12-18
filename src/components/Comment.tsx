import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: (commentToDelete: string) => void;
}

export function Comment(props: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }

  function handleLikeComment() {
    setLikeCount((prevState) => prevState + 1);
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar githubUser="devsantosbruno" />

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
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4">{props.content}</p>
        </div>

        <footer className="mt-4">
          <button
            className="bg-none border-none text-gray-400 hover:text-green-300 transition duration-150 flex items-center gap-2 rounded-sm"
            onClick={handleLikeComment}
          >
            <ThumbsUp />
            Aplaudir
            <span className="before:content-['\2022'] before:py-0 before:mr-2">
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
