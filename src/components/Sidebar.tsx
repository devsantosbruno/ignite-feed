import coverProfile from "../assets/cover-profile.avif";

export function Sidebar() {
  return (
    <aside className="">
      <img src={coverProfile} />
      <div>
        <strong>Bruno Santos</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
