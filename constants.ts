import { Battery100Icon, ShieldCheckIcon } from "@heroicons/react/20/solid";
import { FaSatelliteDish } from "react-icons/fa";
import { TbBuildingBroadcastTower } from "react-icons/tb";
import { FaCompress } from "react-icons/fa6";

export const features = [
  {
    name: "Long lasting battery",
    description: `With a battery life that lasts up to 30 days on a single
      charge, you can rest assured that your pet is safe without the
      hassle of constant charging.`,
    href: "#",
    icon: Battery100Icon,
    frontpage: true,
  },
  {
    name: "LTE and GPS Coverage",
    description: `We use the latest in LTE and GPS technology to ensure your
        pets location is known under any circumstance, almost anywhere
        in the world.`,
    href: "#",
    icon: FaSatelliteDish,
    frontpage: true,
  },
  {
    name: "Waterproof and Durable",
    description: `Our trackers are IP68 certified. Dust, water, and shock proof.
        Mud, water, and rough play are no match for our robust design.`,
    href: "#",
    icon: ShieldCheckIcon,
    frontpage: true,
  },
  {
    name: "Lightweight and Compact",
    description: `Our trackers are designed to be lightweight and compact. Weighing
        only 35 grams, your pet will barely notice it's there.`,
    icon: FaCompress,
  },
  {
    name: "Real Time Tracking",
    description: `Our trackers update their location every 10 seconds, so you
        can rest assured that your pet is safe and sound.`,
    icon: TbBuildingBroadcastTower,
  },
];
