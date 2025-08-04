// cn function example
// <div className={cn('base', isPrimary && 'primary', isError && 'error')} />

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const typo = {
  h1: 'text-3xl sm:text-5xl font-bold text-accent',
  h2: 'text-2xl sm:text-4xl font-bold text-foreground',
  h3: 'text-xl sm:text-2xl font-semibold text-accent',
  h4: 'text-lg sm:text-2xl font-regular italic text-foreground',
  p1: 'text-lg font-normal text-foreground',

  error: 'text-sm text-red-500 italic',
};

export const layout = {
  section: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
  stackContainer: "w-full mx-auto px-4 sm:px-6 lg:px-8 py-8",
}

export const form = {
  label: 'block text-sm font-medium text-background mb-2',
  input: 'w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-background bg-background text-foreground',
};

export const nav = {
  logo: 'h-12 w-auto hover:cursor-pointer',
  tag: 'border border-accent px-3 py-1 rounded-full text-accent text-sm font-medium w-fit h-8 whitespace-nowrap flex items-center',
};

export const btn = {
  primary: "bg-accent text-background px-4 py-3 hover:scale-105 hover:cursor-pointer transition-colors text-base font-medium",
  secondary: "bg-foreground text-background px-4 py-3 hover:scale-105 transition-colors text-base font-medium",
}