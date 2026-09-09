import { BookOpen, ExternalLink, Share2 } from 'lucide-react';

type SocialIconProps = {
  label: string;
  size?: number;
};

export function SocialIcon({ label, size = 20 }: SocialIconProps) {
  const shared = {
    'aria-hidden': true,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
  } as const;

  if (label === 'LinkedIn') {
    return (
      <svg {...shared}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 2-3Z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (label === 'GitHub') {
    return (
      <svg {...shared}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3a5.4 5.4 0 0 0-.1-4S18-1.4 15 1.5a13.4 13.4 0 0 0-6 0C6-1.4 4.8-1 4.8-1a5.4 5.4 0 0 0-.1 4A5.8 5.8 0 0 0 3.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    );
  }

  if (label === 'Instagram') {
    return (
      <svg {...shared}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === 'YouTube') {
    return (
      <svg {...shared}>
        <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8Z" />
        <path d="m10 15 5-3-5-3v6Z" />
      </svg>
    );
  }

  if (label === 'Medium') {
    return <BookOpen aria-hidden="true" size={size} strokeWidth={1.7} />;
  }

  if (label === 'Linktree') {
    return <Share2 aria-hidden="true" size={size} strokeWidth={1.7} />;
  }

  return <ExternalLink aria-hidden="true" size={size} strokeWidth={1.7} />;
}
