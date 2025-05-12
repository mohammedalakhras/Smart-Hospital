import { Client } from "@gradio/client";

export default async function getResultRDS(localIMAGE,setd,d) {
//   const response_0 = await fetch(
//     "https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png"
//   );
//   const exampleImage = await response_0.blob();

//   console.log("response image ", response_0);
//   console.log("example  ", exampleImage);

  const client = await Client.connect(
    "MohammedAlakhras/ChestX-ray"
  );
  
  
  const result = await client.predict("/predict", {
    img: localIMAGE,
  })
  .then(e=>(e.data)
  )
  .catch(e=>{
	[{label:"error",confidence:0}] // مو مجربة هي لسا 
  })

console.log(result)
  return result
}
