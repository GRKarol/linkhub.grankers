import { LucideIcon } from 'lucide-react';

export type Language = 'pl' | 'en';

export interface LinkItem {
  id: string;
  title: string;
  url?: string;
  icon: LucideIcon;
  subtext?: string;
  action?: () => void; // For internal actions like opening contact form
  special?: boolean;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SENDING = 'SENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}