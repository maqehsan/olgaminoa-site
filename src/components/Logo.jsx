export default function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Olga Milovanova"
    >
      {/* O — ellipse letterform */}
      <ellipse
        cx="7"
        cy="14"
        rx="5"
        ry="8"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* M — left col, two diagonals meeting at center, right col */}
      <path
        d="M15 22V6L21 14L27 6V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}
