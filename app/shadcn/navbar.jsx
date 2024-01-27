"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SideBarContent } from "@/components/shadcnCom/sideBar";

const components = [
    {
        title: "Table Component",
        href: "/shadcn/table",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Tabs Component",
        href: "/shadcn/tabs",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Card Component",
        href: "/shadcn/card ",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Edit Pdf",
        href: "/shadcn/edit-pdf",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tooltip",
        href: "/shadcn/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

function ListItem({ className, title, children, ...props }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={props.ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
}
ListItem.displayName = "ListItem";

const Navbar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                            alt=""
                                        />
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components built with Radix UI and
                                            Tailwind CSS.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shadcn/date" title="Calender">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/shadcn/drawer" title="Drawer">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/shadcn/resize" title="Re-Sizer">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    {/* <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Open SideBar
                        </NavigationMenuLink>
                    </Link> */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Edit Profile</Button>
                        </SheetTrigger>
                        <SheetContent><SideBarContent /></SheetContent></Sheet>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default Navbar