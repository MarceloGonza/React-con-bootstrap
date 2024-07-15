// las etiquetas que parecen html son en realidad etiquetas jsx
import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["Uno", "Dos", "Tres"]);
  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);

  // const list: string[] = ["Uno", "Dos", "Tres"];
  // const handleSelect = (elemento: string) => {
  //   console.log("imprimiendo", elemento);
  // };

  // return (
  //   <Card>
  //     <CardBody title="Hola mundo" text="Este es el texto" />
  //     {list.length !== 0 ? (
  //       <List data={list} onSelect={handleSelect} />
  //     ) : (
  //       "No hay contenido"
  //     )}
  //     <Button isLoading={isLoading} onClick={handleClick}>
  //       Hola mundo
  //     </Button>
  //   </Card>
  // );
  const addMinion = () => setData([...data, "Minion"]);
  const remMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={remMinion}>
        Eliminar
      </Button>
      <List data={data} />
    </Card>
  );
}

export default App;
