"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

/* ─── Nav data ─────────────────────────────────────────── */

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Fractional CRO",
    href: "/fractional-cro",
    children: [
      {
        label: "What is Fractional CRO?",
        href: "/fractional-cro/what-is",
      },
      {
        label: "How It Works",
        href: "/fractional-cro/how-it-works",
      },
      {
        label: "Case Studies",
        href: "/fractional-cro/case-studies",
      },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Learning Hub", href: "/learning-hub" },
];

/* ─── Dropdown ──────────────────────────────────────────── */

function Dropdown({
  item,
}: {
  item: NavItem;
}) {
  return (
    <div className="relative group">
      <Link
        href={item.href!}
        className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-gray-700 hover:text-primary transition-colors duration-200 group"
      >
        {item.label}
        <ChevronDown
          size={15}
          className="mt-0.5 transition-transform duration-300 text-gray-500 group-hover:text-primary group-hover:rotate-180"
        />
      </Link>

      {/* Dropdown panel */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top z-50 opacity-0 scale-95 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
        {/* top accent bar */}
        <div className="h-1 w-full bg-primary" />

        <div className="py-2">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="flex flex-col px-4 py-3 hover:bg-violet-50 transition-colors duration-150 group/item"
            >
              <span className="text-[14px] font-semibold text-gray-800 group-hover/item:text-primary transition-colors">
                {child.label}
              </span>
              {child.description && (
                <span className="text-[12px] text-gray-500 mt-0.5">
                  {child.description}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Menu ───────────────────────────────────────── */

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={onClose} className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              const isExpanded = openDropdown === item.label;
              return (
                <div key={item.label} className="mb-1">
                  <div className="flex items-center justify-between w-full rounded-lg text-[15px] font-medium text-gray-700 hover:bg-violet-50 hover:text-primary transition-all duration-150">
                    <Link
                      href={item.href!}
                      onClick={onClose}
                      className="flex-1 px-3 py-3 text-left"
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() =>
                        setOpenDropdown(isExpanded ? null : item.label)
                      }
                      className="p-3"
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-primary" : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-3 pb-2 space-y-0.5 border-l-2 border-primary/20 ml-3 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block px-3 py-2.5 rounded-lg text-[14px] text-gray-600 hover:text-primary hover:bg-violet-50 transition-all duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                onClick={onClose}
                className="flex items-center px-3 py-3 rounded-lg text-[15px] font-medium text-gray-700 hover:bg-violet-50 hover:text-primary transition-all duration-150 mb-1"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="px-4 py-5 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-primary flex items-center justify-center gap-2 w-full active:scale-[0.98] transition-all duration-200"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}

/* ─── Main Navbar ───────────────────────────────────────── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /* Scroll shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Close dropdown on route change */
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  const toggleDropdown = (label: string) =>
    setOpenDropdown((prev) => (prev === label ? null : label));

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
              <div className="relative flex-shrink-0 w-[130px] sm:w-[155px] lg:w-[175px]">
                <Image src="/images/logo.png" 
                alt="Logo" 
                width={1000} 
                height={800} 
                className="w-full h-auto object-contain"
                priority
                />
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                if (item.children) {
                  return (
                    <Dropdown
                      key={item.label}
                      item={item}
                    />
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className={`relative px-3 py-2 text-[15px] font-medium transition-colors duration-200 group ${
                      isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {/* underline */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="btn-primary group inline-flex items-center gap-2 text-[14.5px] px-6 py-3 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <span>Contact Us</span>
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={22} className="text-gray-700" />
            </button>

          </div>
        </div>
      </header>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-[72px]" />

      {/* Mobile drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
