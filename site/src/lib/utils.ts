import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const REPO = 'alex-mextner/AgentOS';
export const gh = (path = '') => `https://github.com/${REPO}${path}`;
export const ghBlob = (p: string) => gh(`/blob/main/${p.replace(/^\//, '')}`);
