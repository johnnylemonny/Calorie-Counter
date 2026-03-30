export function LogoMark({ className = 'size-10' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6" y="8" width="52" height="48" rx="22" fill="url(#logo-surface)" />
      <path
        d="M19 31.5C19 23.4919 25.4919 17 33.5 17H41C43.2091 17 45 18.7909 45 21C45 23.2091 43.2091 25 41 25H33.5C29.9101 25 27 27.9101 27 31.5C27 35.0899 29.9101 38 33.5 38H45"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M17 40H47C44.8 46.6667 39.6 50 31.4 50C23.4 50 18.6 46.6667 17 40Z"
        fill="white"
        fillOpacity="0.9"
      />
      <circle cx="48" cy="18" r="7" fill="#F5B85B" />
      <path
        d="M48 13.5V22.5M43.5 18H52.5"
        stroke="#3F2C18"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="logo-surface" x1="12" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#52B788" />
          <stop offset="0.6" stopColor="#2D6A4F" />
          <stop offset="1" stopColor="#1B4332" />
        </linearGradient>
      </defs>
    </svg>
  )
}
