import Soup from "@/components/Soup";
import { datos } from "./datos";
import Welcome from "@/components/Welcome";
import { useState, useEffect } from "react";
import { useAppContext } from "@/state/soupstate";
import Adios from "@/components/Adios";

export default function StepsLayout() {
  const [data, setData] = useState([]);
  const soup = useAppContext();

  useEffect(() => {
    setData(datos);
  }, [soup]);

  const renderContent = () => {
    if (soup.ui === 1) return <Welcome />;
    if (soup.ui === 2) return <Soup key={1} level={data[0]} ui={3} />;
    if (soup.ui === 3) return <Soup key={2} level={data[1]} ui={4} />;
    if (soup.ui === 4) return <Soup key={3} level={data[2]} ui={5} />;
    if (soup.ui === 5) return <Soup key={4} level={data[3]} ui={6} />;
    if (soup.ui === 6) return <Adios />;
    return null;
  };
  return (
    <>
      <div>{renderContent()}</div>
    </>
  );
}
