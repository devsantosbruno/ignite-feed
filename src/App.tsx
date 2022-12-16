import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl my-8 mx-auto px-4 grid grid-cols-3 gap-8 items-start">
        <Sidebar />

        <main className="col-span-2">
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
