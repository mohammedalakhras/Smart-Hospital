import { Client } from "@gradio/client";

export default async function getResultChat(msg, setd, d, setL) {
    try{
  const client = await Client.connect(
    "https://33d2f4df3fc3428964.gradio.live/"
  );
  setL(true);
  const result = await client
    .predict("/predict", {
      prompt: msg,
    })
    .then((e) => {
      setd(e.data);
      setL(false);
    }).catch(e=>{
        setd(e.data);
        setL(false);
    })

}
catch(e){
    setd("Error");
    setL(false);
}
}
