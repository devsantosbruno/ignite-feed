import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header />
      <div className="max-w-6xl py-8 mx-auto px-4 grid grid-cols-4 gap-8 items-start">
        <Sidebar />

        <main className="col-span-3">
          <div className="flex flex-col gap-8">
            <Post />
            <Post />
          </div>
        </main>
      </div>
    </div>
  );
}
