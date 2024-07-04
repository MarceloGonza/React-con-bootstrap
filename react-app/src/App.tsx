// las etiquetas que parecen html son en realidad etiquetas jsx
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Uno", "Dos", "Tres"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
