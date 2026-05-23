import type { IconType } from "react-icons";

export type TabItem = {
  label: string;
  active?: boolean;
};

export type NavItem = {
  label: string;
  icon: IconType;
};

export type ServiceItem = {
  title: string;
  subtitle: string;
  icon: IconType;
};

export type TransferItem = {
  company: string;
  description: string;
  digits: string;
  date: string;
  amount: string;
  logo: string;
};

export type PaymentCardItem = {
  label: string;
  amount: string;
  expiry: string;
  digits: string;
  tone: "green" | "olive" | "gray";
};
