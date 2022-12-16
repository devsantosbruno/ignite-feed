import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className="bg-gray-800 flex justify-center py-5">
      <img src={igniteLogo} alt="Logotipo do ignite" className="h-10" />
    </header>
  );
}
