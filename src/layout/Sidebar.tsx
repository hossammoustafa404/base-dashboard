"use client";

import { Button } from "@components/ui/Button";
import { sidebarNavLinks } from "@constants";
import { cn } from "@lib/utils";
import { AlignLeft, AlignRight, Home, Layers3, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <aside className="sidebar-scrollbar h-screen overflow-y-auto px-4 py-4 bg-white">
      {/* Toggle Button */}
      <Button
        size="icon"
        className={cn(
          open ? "ml-auto" : "mx-auto",
          "group bg-transparent hover:bg-transparent block w-auto h-auto"
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <AlignRight className="text-primary group-hover:text-primary/75 duration-medium" />
        ) : (
          <AlignLeft className="text-primary group-hover:text-primary/75 duration-medium" />
        )}
      </Button>

      {/* Nav links */}
      <section className="mt-6">
        <ul className="flex flex-col gap-y-2">
          {sidebarNavLinks.map(({ id, name, Icon, href }) => (
            <li key={id}>
              <Link
                href={href}
                className={cn(
                  open ? "pe-32" : "pe-3",
                  "group flex gap-x-2 py-2 ps-3 rounded-xl duration-medium hover:bg-primary/5"
                )}
              >
                <Icon
                  className={cn(
                    open ? "w-5" : "w-8",
                    "duration-medium group-hover:text-primary text-slate-700"
                  )}
                />
                <h2
                  className={cn(
                    open ? "block" : "hidden",
                    "capitalize group-hover:text-primary"
                  )}
                >
                  {name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
