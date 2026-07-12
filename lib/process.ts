import { LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;

  icon: string;

  color: "blue" | "cyan" | "indigo" | "teal";

  features: string[];
}

export interface ProcessSectionData {
  badge: string;
  title: string;
  highlight: string;
  description: string;

  steps: ProcessStep[];
}