from langchain.document_loaders import UnstructuredFileLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings
import pinecone

OPENAI_API_KEY = "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"
PINECONE_KEY = "b06ab872-a140-472c-9b3c-c793ef530ee5"
PINECONE_ENV = "us-central1-gcp"

if __name__ == '__main__':
    loader = UnstructuredFileLoader("dtonomy.txt")
    data = loader.load()

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=800, chunk_overlap=0)
    texts = text_splitter.split_documents(data)

    embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

    # initialize pinecone
    pinecone.init(
        api_key=PINECONE_KEY,
        environment=PINECONE_ENV
    )
    index_name = "langchain-openai"
    namespace = "scraping"

    docsearch = Pinecone.from_texts(
      [t.page_content for t in texts], embeddings,
      index_name=index_name, namespace=namespace)

