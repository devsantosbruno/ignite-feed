import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      githubUser: "devsantosbruno",
      name: "Bruno Santos",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
    ],
    publishedAt: new Date("2022-12-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      githubUser: "diego3g",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
    ],
    publishedAt: new Date("2022-12-15 20:00:00"),
  },
];

export function App() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header />

      <div className="max-w-6xl py-8 mx-auto px-4 grid md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
        <Sidebar />

        <main className="md:col-span-2 lg:col-span-3">
          <div className="flex flex-col gap-8">
            {posts.map((post) => {
              return (
                <Post
                  authorAvatar={post.author.githubUser}
                  authorName={post.author.name}
                  authorRole={post.author.role}
                  content={post.content}
                  publishedAt={post.publishedAt}
                  key={post.id}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
