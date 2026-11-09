import Loader from "../components/Loader";

// A template (unlike a layout) remounts on every navigation, so the logo intro replays per page.
export default function Template({ children }: { children: React.ReactNode }) {
  return <><Loader />{children}</>;
}
