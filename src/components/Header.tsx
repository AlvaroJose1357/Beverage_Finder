export default function Header() {
  return (
    <header className="bg-slate-800">
      <div className="container mx-auto px-5 py-16">
        <div className="flex items-center justify-between">
          <div>
            {/* logo */}
            <img className="w-32" src="/logo.svg" alt="logotipo" />
          </div>
          <nav>{/* navegacion entre paginas */}</nav>
        </div>
      </div>
    </header>
  );
}
