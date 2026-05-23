import {
  PiBrowsers,
  PiCheckSquare,
  PiClipboardText,
  PiFile,
  PiFileText,
  PiFireSimple,
  PiGlobe,
  PiLightning,
  PiSwap,
} from "react-icons/pi";
import type {
  NavItem,
  PaymentCardItem,
  ServiceItem,
  TabItem,
  TransferItem,
} from "../types";

export const tabs: TabItem[] = [
  { label: "Overview" },
  { label: "Payments", active: true },
  { label: "Cards" },
  { label: "Account" },
  { label: "System" },
  { label: "Business" },
];

export const navigationItems: NavItem[] = [
  { label: "Dashboard", icon: PiBrowsers },
  { label: "Scheduled", icon: PiCheckSquare },
  { label: "Transfers", icon: PiSwap },
  { label: "Templates", icon: PiFileText },
  { label: "SWIFT", icon: PiGlobe },
  { label: "Exchange", icon: PiClipboardText },
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Electricity",
    subtitle: "UrkEnergo LTD.",
    icon: PiLightning,
  },
  {
    title: "Heating Gas",
    subtitle: "Gazprom UA",
    icon: PiFireSimple,
  },
  {
    title: "Tax online",
    subtitle: "Kharkov 62 str.",
    icon: PiFile,
  },
];

export const transferItems: TransferItem[] = [
  {
    company: "Apple Inc.",
    description: "Apple ID Payment",
    digits: "4012",
    date: "28 Oct. 21",
    amount: "- $ 550",
    logo: "https://assets.codepen.io/285131/apple.svg",
  },
  {
    company: "Pinterest",
    description: "2 year subscription",
    digits: "5214",
    date: "26 Oct. 21",
    amount: "- $ 120",
    logo: "https://assets.codepen.io/285131/pinterest.svg",
  },
  {
    company: "Warner Bros.",
    description: "Cinema",
    digits: "2228",
    date: "22 Oct. 21",
    amount: "- $ 70",
    logo: "https://assets.codepen.io/285131/warner-bros.svg",
  },
];

export const paymentCards: PaymentCardItem[] = [
  {
    label: "Internet",
    amount: "$ 2,110",
    expiry: "01/22",
    digits: "4012",
    tone: "green",
  },
  {
    label: "Universal",
    amount: "$ 5,621",
    expiry: "12/23",
    digits: "2228",
    tone: "olive",
  },
  {
    label: "Gold",
    amount: "$ 3,473",
    expiry: "03/22",
    digits: "5214",
    tone: "gray",
  },
];
