// las etiquetas que parecen html son en realidad etiquetas jsx
import Card, { CardBody } from "./components/Card";

function App() {
  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
    </Card>
  );
}

export default App;
