import { Home, Layers3, Settings, Users } from "lucide-react";

// Nav Icons Width
const navIconWidth = 5;

// Sidbar Nav Links
export const sidebarNavLinks = [
  {
    id: 0,
    name: "main",
    Icon: Home,
    href: "/",
  },
  {
    id: 1,
    name: "pages",
    Icon: Layers3,
    href: "/pages",
  },
  {
    id: 2,
    name: "settings",
    Icon: Settings,
    href: "/settings",
  },
  { id: 3, name: "users", Icon: Users, href: "/users" },
];
