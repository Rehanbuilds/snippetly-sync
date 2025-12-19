// Title: Imported Snippet
// Language: javascript
// Tags: none
// Created: 12/5/2025
// Snippet ID: f684fefb-dab0-4157-a6be-27047b22932f

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
