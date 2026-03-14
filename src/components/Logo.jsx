export default function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Maqsood Ehsan"
    >
      {/* M — left col, two diagonals meeting at center, right col */}
      <path
        d="M3 22V6L10 14L17 6V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      {/* E — vertical bar + three horizontal bars */}
      <path
        d="M21 6V22M21 6H27M21 14H26M21 22H27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  )
}
