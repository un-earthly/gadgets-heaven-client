import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  subItems?: SubItem[];
}

interface SubItem {
  name: string;
  href: string;
}

interface SidebarProps {
  navigationItems: NavigationItem[];
  title?: string;
  onNavigate?: () => void;
}

interface NavLinkProps {
  item: NavigationItem;
  isNested?: boolean;
  onNavigate?: () => void;
}

const NavLink = ({ item, isNested = false, onNavigate }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const Icon = item.icon;

  const handleClick = (e: React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="space-y-1">
      <div
        className={cn(
          "flex items-center px-3 py-2 text-sm font-medium rounded-md",
          "text-zinc-700 dark:text-zinc-300",
          "transition-colors cursor-pointer",
          "hover:bg-zinc-100 dark:hover:bg-zinc-800",
          isNested && "pl-10"
        )}
      >
        {!isNested && <Icon className="w-5 h-5 mr-3" />}

        {hasSubItems ? (
          <div onClick={handleClick} className="flex items-center flex-1">
            <span className="flex-1">{item.name}</span>
            {isOpen
              ? <ChevronDown className="w-4 h-4" />
              : <ChevronRight className="w-4 h-4" />
            }
          </div>
        ) : (
          <Link href={item.href!} className="flex-1" onClick={onNavigate}>
            {item.name}
          </Link>
        )}
      </div>

      {hasSubItems && isOpen && (
        <div className="space-y-1">
          {(item && item.subItems) && item.subItems.map((subItem) => (
            <Link
              key={subItem.name}
              href={subItem.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center pl-11 pr-3 py-2 text-sm font-medium rounded-md",
                "text-zinc-600 dark:text-zinc-400",
                "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                "transition-colors"
              )}
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const DesktopSidebar = ({
  navigationItems,
  title = "Dashboard"
}: SidebarProps) => (
  <div className="hidden md:flex md:flex-col md:w-64 md:bg-white dark:bg-zinc-900 md:border-r">
    <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        <span className="text-xl font-semibold tracking-wider">{title}</span>
      </div>
      <nav className="flex-1 px-2 mt-5 space-y-1">
        {navigationItems.map((item) => (
          <NavLink key={item.name} item={item} />
        ))}
      </nav>
    </div>
  </div>
);

export const MobileSidebar = ({
  navigationItems,
  title = "Dashboard"
}: SidebarProps) => {
  const [open, setOpen] = useState(false);

  const handleNavigate = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="px-4 pt-5">
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <nav className="flex-1 px-2 mt-5 space-y-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              item={item}
              onNavigate={handleNavigate}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};