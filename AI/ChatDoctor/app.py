import torch
from transformers import AutoModelForCausalLM, AutoTokenizer, GenerationConfig
import gradio as gr

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model_id = "Narrativaai/BioGPT-Large-finetuned-chatdoctor"

tokenizer = AutoTokenizer.from_pretrained("microsoft/BioGPT-Large")

model = AutoModelForCausalLM.from_pretrained(model_id)


# Move the model to the device
model = model.to(device)

def answer_question(
        prompt,
        temperature=0.1,
        top_p=0.75,
        top_k=40,
        num_beams=2,
        **kwargs,
):
    inputs = tokenizer(prompt, return_tensors="pt")
    # Move the inputs to the device
    inputs = {key: val.to(device) for key, val in inputs.items()}
    input_ids = inputs["input_ids"]
    attention_mask = inputs["attention_mask"]
    generation_config = GenerationConfig(
        temperature=temperature,
        top_p=top_p,
        top_k=top_k,
        num_beams=num_beams,
        **kwargs,
    )
    with torch.no_grad():
        generation_output = model.generate(
            input_ids=input_ids,
            attention_mask=attention_mask,
            generation_config=generation_config,
            return_dict_in_generate=True,
            output_scores=True,
            max_new_tokens=512,
            eos_token_id=tokenizer.eos_token_id

        )
    s = generation_output.sequences[0]
    output = tokenizer.decode(s, skip_special_tokens=True)
    return output.split(" Response:")[1]


def gui_interface(prompt):
    prompt="""
    Below is an instruction that describes a task, paired with an input that provides further context.Write a response that appropriately completes the request.

    ### Instruction:
    If you are a doctor, please answer the medical questions based on the patient's description.

    ### Input:
    """+prompt+"""
    ### Response:
    """
    return answer_question(prompt)

iface = gr.Interface(fn=gui_interface, inputs="text", outputs="text")
iface.launch()
