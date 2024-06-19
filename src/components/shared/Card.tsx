import Link from "next/link";
import clsx from "clsx";
import { IconType } from "react-icons";

import { motion } from "framer-motion";
import {
  showHoverAnimation,
  removeHoverAnimation,
} from "@/lib/windowAnimation";
import { popUp } from "@/lib/FramerMotionVariants";

interface Props {
  title: string;
  body?: string;
  href: string;
  icon?: IconType;
  iconHexColor?: string;
}

function Card({ title, body, href, icon: Icon, iconHexColor }: Props) {
  const getBgColorClass = (hexColor: string | undefined) => {
    if (!hexColor) return "bg-black";
    return clsx(`bg-${hexColor}`);
  };

  return (
    <motion.li
      variants={popUp}
      onMouseMove={(e) => showHoverAnimation(e)}
      onMouseLeave={(e) => removeHoverAnimation(e)}
      className="flex border border-neutral-700 bg-neutral-900 text-neutral-100 shadow-sm shadow-neutral-800 transition-colors ease-in-out duration-150 hover:bg-neutral-800"
    >
      <Link
        href={href}
        target="_blank"
        passHref
        className="flex h-full w-full "
      >
        {Icon && (
          <div
            className={clsx(
              "flex items-center justify-center p-4",
              getBgColorClass(iconHexColor),
            )}
            style={{ backgroundColor: iconHexColor || "#000" }}
          >
            <Icon className="h-4 w-4 text-white" />
          </div>
        )}
        <div className="h-full w-full justify-center p-4">
          <h2 className="font-semibold">{title}</h2>
          {body && <p className="text-sm text-neutral-400">{body}</p>}
        </div>
      </Link>
    </motion.li>
  );
}

export default Card;
