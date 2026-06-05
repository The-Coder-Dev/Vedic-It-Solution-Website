"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Menubar() {
  return (
    <NavigationMenu
      viewport={false}
      className="md:flex hidden"
      
    >
      <NavigationMenuList className="gap-1">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="rounded-full px-4 py-2 text-white hover:text-white  hover:bg-white/10 transition-all duration-300"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className="rounded-full px-4 py-2 text-white hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              About Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="
              bg-transparent
              text-white
              hover:text-white
              hover:bg-white/10
              data-[state=open]:bg-white/10
              transition-all
              duration-300
            "
          >
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent className="
            backdrop-blur-xl
            border
            border-white/10
            shadow-xl
            ">
            <ul className="grid w-87.5 gap-2 p-4  backdrop-blur-xl">
              <ListItem
                href="/services/meta-ads"
                title="Meta Ads"
              >
                Facebook & Instagram advertising campaigns.
              </ListItem>

              <ListItem
                href="/services/google-ads"
                title="Google Ads"
              >
                Search, Display and Performance campaigns.
              </ListItem>

              <ListItem
                href="/services/graphic-design"
                title="Graphic Design"
              >
                Branding, creatives and marketing assets.
              </ListItem>

              <ListItem
                href="/services/website-development"
                title="Website Development"
              >
                Modern websites built for conversions.
              </ListItem>

              <ListItem
                href="/services/video-production-editing"
                title="Video Production & Editing"
              >
                Professional video creation and editing.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Onboard */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="
              bg-transparent
              text-white
              hover:bg-white/10
              data-[state=open]:bg-white/10
            hover:text-white
              transition-all
              duration-300
            "
          >
            Onboard
          </NavigationMenuTrigger>

          <NavigationMenuContent className="
            backdrop-blur-xl
            border
            border-white/10
            shadow-xl
            ">
            <ul className="w-[320px] p-4 space-y-2 backdrop-blur-xl">
              <ListItem
                href="https://docs.google.com/forms/d/e/1FAIpQLSeaAoPU0j1AE6AWot6hS01q5j96sNDqGyUfGb7qZStzCKAksw/viewform"
                title="Meta Ads Form"
                
              >
                Complete your Meta Ads onboarding form.
              </ListItem>

              <ListItem
                href="https://docs.google.com/forms/d/e/1FAIpQLSfL1Wig8JwiBNyTt7H6g-_v43fzWQyErRgFiKwwhdoPj5DW3g/viewform"
                title="Social Media Form"
              >
                Submit your social media requirements.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="rounded-full px-4 py-2 text-white hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="
            block
            rounded-xl
            p-3
            transition-all
            duration-300
            hover:bg-white/10
          "
        >
          <div className="text-sm font-semibold text-white">
            {title}
          </div>

          <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}