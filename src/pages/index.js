import Soup from "@/components/Soup";
import { datos } from "../datos/datos";
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

  const styles = [
    {
      background:
        "bg-gradient-to-b from-red-500 to-orange-400 min-h-screen flex items-center justify-center",
      grid: "grid grid-cols-4",
    },
    {
      background:
        "bg-gradient-to-r from-yellow-400 to-purple-400 min-h-screen flex items-center justify-center",
      grid: "grid grid-cols-5",
    },
    {
      grid: "grid grid-cols-6",
      background:
        "bg-gradient-radial from-blue-200 via-blue-500 to-blue-800 min-h-screen flex items-center justify-center",
    },
    {
      background:
        "bg-gradient-to-b from-pink-500 to-violet-500 min-h-screen flex items-center justify-center",
      grid: "grid grid-cols-7 ",
    },
  ];
  const renderContent = () => {
    if (soup.ui === 1) return <Welcome />;
    if (soup.ui === 2)
      return (
        <Soup
          key={1}
          level={data[0]}
          ui={3}
          background={styles[0].background}
          grid={styles[0].grid}
        />
      );
    if (soup.ui === 3)
      return (
        <Soup
          key={2}
          level={data[1]}
          ui={4}
          background={styles[1].background}
          grid={styles[1].grid}
        />
      );
    if (soup.ui === 4)
      return (
        <Soup
          key={3}
          level={data[2]}
          ui={5}
          background={styles[2].background}
          grid={styles[2].grid}
        />
      );
    if (soup.ui === 5)
      return (
        <Soup
          key={4}
          level={data[3]}
          ui={6}
          background={styles[3].background}
          grid={styles[3].grid}
        />
      );
    if (soup.ui === 6) return <Adios />;
    return null;
  };
  return (
    <>
      <div>{renderContent()}</div>
    </>
  );
}
