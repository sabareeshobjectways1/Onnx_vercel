import { pipeline, env } from '@xenova/transformers';

env.localModelPath = './models/';
env.allowRemoteModels = false;

let gen;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { prompt } = req.body;
  if (!gen) gen = await pipeline('text-generation','Xenova/distilgpt2');
  const out = await gen(prompt, {
    max_new_tokens: 60,
    do_sample: true,
    temperature: 0.7
  });
  res.status(200).json({ text: out[0].generated_text });
}
