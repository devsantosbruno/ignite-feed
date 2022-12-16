import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className="comment">
      <img src="https://github.com/devsantosbruno.png" />
      <div className="commentBox">
        <div className="commentContent">
          <header>
            <div className="authorAndTitle">
              <strong>Bruno Santos</strong>
              <time
                title="11 de Maio às 08:13h"
                dateTime="2022-06-11 08:13:30"
                className="text-sm text-grey-400"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
