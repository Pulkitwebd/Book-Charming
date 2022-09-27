import React from "react";
import Link from "next/link";
import classes from "./Menu.module.css";
import { Box, Stack, Divider } from "@mui/material";

const MENU_ITEMS = [
  { id: 1, name: "Home", href: "/", sub_items: [] },
  { id: 2, name: "About", href: "/about", sub_items: [] },
  { id: 3, name: "Services", href: "/services", sub_items: [] },
  { id: 4, name: "Guest post", href: "/guestpost", sub_items: [] },
  {
    id: 5,
    name: "Interviews",
    href: "/interviews",
    sub_items: [
      {
        id: 101,
        name: "Author Interviews",
        href: "/interviews/author-interviews",
      },
      {
        id: 102,
        name: "Blogger Interviews",
        href: "/interviews/blogger-interviews",
      },
    ],
  },
  {
    id: 6,
    name: "Book Reviews",
    href: "/book-reviews",
    sub_items: [],
  },
  { id: 7, name: "Blogs", href: "/blogs", sub_items: [] },
  { id: 8, name: "Contact", href: "/contact", sub_items: [] },
];

const DesktopMenu = () => {
  return (
    <>
      {MENU_ITEMS.map((item) => {
        if (item.sub_items.length > 0) {
          return (
            <Box className={classes.dropdown} key={item.id}>
              <Link href={item.href}>{item.name}</Link>
              <Box className={classes.interviewDropDown}>
                {item.sub_items.map((sub_item) => {
                  return (
                    <>
                      <Link href={sub_item.href} key={sub_item.id}>
                        <Box>{sub_item.name}</Box>
                      </Link>
                      <Divider
                        variant="fullWidth"
                        sx={{ backgroundColor: "rgba(255, 255, 255, 0.29)" }}
                      />
                    </>
                  );
                })}
              </Box>
            </Box>
          );
        } else {
          return (
            <Link href={item.href} key={item.id}>
              <Box>{item.name}</Box>
            </Link>
          );
        }
      })}
    </>
  );
};

const MobileMenu = ({ handleClick }) => {
  return (
    <>
      {MENU_ITEMS.map((item) => {
        if (item.sub_items.length > 0) {
          return (
            <>
              <Stack
                key={item.id}
                className="interFont"
                onClick={() => {
                  handleClick();
                }}
              >
                <Link href={item.href}>{item.name}</Link>
              </Stack>
              <Box className={classes.interviewSubCategory}>
                {item.sub_items.map((sub_item) => {
                  return (
                    <Stack
                      className="interFont"
                      key={sub_item.id}
                      onClick={() => {
                        handleClick();
                      }}
                    >
                      <Link href={sub_item.href}>{sub_item.name}</Link>
                    </Stack>
                  );
                })}
              </Box>
            </>
          );
        } else {
          return (
            <Stack
              key={item.id}
              className="interFont"
              onClick={() => {
                handleClick();
              }}
            >
              <Link href={item.href}>{item.name}</Link>
            </Stack>
          );
        }
      })}
    </>
  );
};

export { DesktopMenu, MobileMenu };
