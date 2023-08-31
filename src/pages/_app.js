import "../styles/tailwind.css";
import SoupContext from "@/state/soupstate";

export default function App({ Component, pageProps }) {
  return (
    <SoupContext>
      <Component {...pageProps} />
    </SoupContext>
  );
}
