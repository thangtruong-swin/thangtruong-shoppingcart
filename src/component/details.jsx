import { useParams } from "react-router-dom";
import { getProductsType } from './services';


export default function DetailPage() {
  // let params = useParams();
  let {id} = useParams();
  // let getItemsByType = getProductsType();

  return (
    <div>
      <main style={{ padding: "1rem" }}>
      <h2>Hello: {id}</h2>
{/* 
      <h2>Total Due: {params.name}</h2>
      <p>
        {params.name}: {params._id}
      </p> */}
    </main>
    </div>
  );
}