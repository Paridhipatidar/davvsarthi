import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { LogOut, User } from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/admin/dashboard" },
  { label: "Programs", path: "/admin/programs" },
  { label: "Eligibility", path: "/admin/eligibility" },
  { label: "Seats", path: "/admin/seats" },
  { label: "Admission", path: "/admin/admission-process" },
  { label: "Fees", path: "/admin/fees" },
  { label: "Reservation", path: "/admin/reservation" },
  { label: "Merit", path: "/admin/merit-rules" },
  { label: "Instructions", path: "/admin/instructions" },
  { label: "Cut-offs", path: "/admin/previous-year-cutoffs" },
];

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname.startsWith(path);

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b">
      <div className="max-w-screen-xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">

        {/* LEFT: LOGO (SAME AS STUDENT) */}
        <Link to="/admin/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
            <img
              src="/images/hero/logo.png"
              alt="DAVV Sarthi Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span
              className="text-lg md:text-xl font-bold text-foreground tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              DAVV Sarthi
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground">
              Admin Portal
            </span>
          </div>
        </Link>

        {/* CENTER: NAV LINKS (SINGLE ROW) */}
        <nav className="flex-1 mx-4">
          <ul className="flex items-center justify-center gap-2 flex-nowrap">
            {navItems.map((item) => (
              <li key={item.path}>
               <NavLink
  to={item.path}
  className={({ isActive }) =>
    `whitespace-nowrap px-2 py-1 rounded-md text-[13px] font-medium transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-muted-foreground hover:bg-muted"
    }`
  }
>
  {item.label}
</NavLink>

              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT: USER + LOGOUT (SAME STYLE AS STUDENT) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <span className="text-[13px] font-medium">Admin</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md border text-[13px] text-muted-foreground hover:bg-muted hover:text-foreground transition"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

      </div>
    </header>
  );
};

export default AdminNavbar;
