import { ReactNode } from "react";
import Header from "./Header";

interface AdminLayoutProps {
  children: ReactNode;
}

/**
 * AdminLayout Component
 * Main layout wrapper that includes sidebar and header
 * Used to wrap all admin pages for consistent layout
 */
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>

      {/* Main Content Area */}
      <div>
        {/* Top Header */}
        <Header />

<main className="p-6 pt-20 md:pt-24 animate-fade-in">
  {children}
</main>

      </div>
    </div>
  );
};

export default AdminLayout;
