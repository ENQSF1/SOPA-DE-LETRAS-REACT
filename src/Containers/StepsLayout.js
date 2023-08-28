import Soup from "@/components/Soup";
import { datos as soup } from "@/pages/datos";
import Welcome from "@/components/Welcome";
import { useState } from "react";

export default function StepsLayout({ state, send }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(soup);
  }, []);

  const renderContent = () => {
    if (state.matches("inicio")) return <Welcome />;
    if (state.matches("levelOne")) return <Soup level={data[0]} send={send} />;
    if (state.matches("levelTwo")) return <Soup level={data[1]} send={send} />;
    if (state.matches("levelThree"))
      return <Soup level={data[2]} send={send} />;
    if (state.matches("levelFour")) return <Soup level={data[3]} send={send} />;
    return null;
  };
  return <div>{renderContent()}</div>;
}
