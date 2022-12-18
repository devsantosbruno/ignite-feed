import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface PostProps {
  publishedAt: Date;
  authorAvatar: string;
  authorName: string;
  authorRole: string;
  content: LineProps[];
}

interface LineProps {
  type?: "paragraph" | "link";
  content?: string;
}

export function Post(props: PostProps) {
  const [quantity, setQuantity] = useState(0);
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    props.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    setNewCommentText(event?.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo eh obrigatório");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className="bg-gray-800 rounded-lg p-5 md:p-10">
      <header className="sm:flex items-center justify-between">
        <div className="flex items-center gap-4 mb-1 sm:mb-0">
          <Avatar githubUser={props.authorAvatar} hasOutline />

          <div className="flex flex-col">
            <strong className="text-gray-100 leading-6">
              {props.authorName}
            </strong>
            <span className="text-sm text-gray-400 leading-6">
              {props.authorRole}
            </span>
          </div>
        </div>

        <div className="text-end">
          <time
            title={publishedDateFormatted}
            dateTime={props.publishedAt.toISOString()}
            className="text-sm text-grey-400"
          >
            {publishedDateRelativeToNow}
          </time>
        </div>
      </header>

      <div className="leading-6 mt-6 flex flex-col gap-4">
        {props.content.map((line: LineProps) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a
                  href="#"
                  className="font-bold text-green-500 hover:text-green-300 transition duration-150"
                >
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={(event) => {
          handleCreateNewComment(event);
        }}
        className="w-full mt-6 pt-6 border-t-[1px] border-gray-600"
      >
        <strong className="leading-6 text-gray-100">Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
          name="comment"
          onChange={(event) => {
            setQuantity(event.target.value.length);
            handleNewCommentChange(event);
          }}
          value={newCommentText}
          required
          onInvalid={() => handleNewCommentInvalid}
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
        {comments.map((comment) => {
          return (
            <Comment
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
