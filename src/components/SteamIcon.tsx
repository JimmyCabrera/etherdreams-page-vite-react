type Props = { className?: string };

export default function SteamIcon({ className = "" }: Props) {
  return (
    <svg
      className={`steam-icon ${className}`}
      xmlns="/home/jim/Escritorio/etherdreams-page-vite-react/public/steam-svgrepo-com.svg"
      viewBox="0 0 496 512"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M496 256c0 137-111 248-248 248S0 393 0 256 111 8 248 8s248 111 248 248zM197.5 338.5l-43.7-18.2c-5.3-2.2-11.3.3-13.5 5.6-2.2 5.3.3 11.3 5.6 13.5l43.7 18.2c5.3 2.2 11.3-.3 13.5-5.6 2.2-5.3-.3-11.3-5.6-13.5zm93.8-121.8c-23.4 0-42.4 19-42.4 42.4 0 3.2.4 6.3 1.1 9.3l-60.7 27.2c-4.7-3.4-10.5-5.4-16.8-5.4-15.9 0-28.8 12.9-28.8 28.8s12.9 28.8 28.8 28.8c15.9 0 28.8-12.9 28.8-28.8 0-1.1-.1-2.1-.2-3.2l62.3-27.9c6.6 5.3 15 8.4 24.2 8.4 21.4 0 38.7-17.3 38.7-38.7 0-21.4-17.3-38.7-38.7-38.7z" />
    </svg>
  );
}
