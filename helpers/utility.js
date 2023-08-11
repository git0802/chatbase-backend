require("dotenv").config();

exports.randomNumber = function (length) {
  var text = "";
  var possible = "123456789";
  for (var i = 0; i < length; i++) {
    var sup = Math.floor(Math.random() * possible.length);
    text += i > 0 && sup == i ? "0" : possible.charAt(sup);
  }
  return Number(text);
};

exports.embedding = async function (text, namespace) {
  const splitter = new TokenTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 0,
  });

  const output = await splitter.createDocuments(text);

  const client = new PineconeClient();

  await client.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
  });
  const pineconeIndex = client.Index(process.env.PINECONE_INDEX);

  await PineconeStore.fromDocuments(
    output,
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY }),
    { pineconeIndex, namespace: namespace }
  );
  return;
};
