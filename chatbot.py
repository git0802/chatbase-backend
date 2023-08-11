from fastapi import APIRouter, Request
import re
import requests
from bs4 import BeautifulSoup
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain
import pinecone
from langchain.vectorstores import Pinecone
from langchain.embeddings.openai import OpenAIEmbeddings


router = APIRouter()
limit_count = 150;

OPENAI_API_KEY = "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"
PINECONE_KEY = "b06ab872-a140-472c-9b3c-c793ef530ee5"
PINECONE_ENV = "us-central1-gcp"
init_url = "www.dtonomy.com"

#------------------data-------------------------#
def saveTrainData(links):
    for link in links:
        print(link)

        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
        }

        response = requests.get(link, headers=headers)
        soup = BeautifulSoup(response.content, 'html.parser')
        tags = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'])
        all_text = ''

        for tag in tags:
            all_text += (tag.get_text() + '\n')
        try:
            with open('dtonomy.txt', 'a', encoding='utf-8') as f:
                f.write(all_text)
        except Exception as e:
            print(e)
    return


#------------------crawling-------------------------#
def check_url(url, not_links):
    try:
        pattern = re.compile("\d{4}/\d{2}/\d{2}")
        if pattern.search(url):
            return False
        if init_url not in url:
            return False
        if url in not_links:
            return False
        if url[len(url)-1] != '/':
            return False
    except Exception as e:
        print(e)
        return False
    return True

def crawl_website():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
    }
    source_code = requests.get(init_url, headers=headers)
    soup = BeautifulSoup(source_code.content, 'lxml')
    links = []
    crawled_links = []

    for link in soup.find_all('a', href=True):
        sub_url = link.get('href')
        if check_url(sub_url, links):
            links.append(sub_url)
            print(sub_url)

    try:
        for link in links:
            if(len(links)>limit_count):
                break
            if link in crawled_links:
                continue
            sub_source_code = requests.get(link, headers=headers)
            sub_soup = BeautifulSoup(sub_source_code.content, 'lxml')
            crawled_links.append(link)

            for sub_link in sub_soup.find_all('a', href=True):
                sub_link_url = sub_link.get('href')
                if check_url(sub_link_url, links):
                    links.append(sub_link_url)
                    print(sub_link_url)
                    if(len(links)>limit_count):
                        break
    except Exception as e:
        print(e)

    return links

@router.get('/getReply/{question}')
def getReply(question):
    # links = crawl_website();
    # print('\n Finished Crawling \n')
    # saveTrainData(links)
    # print('\n Finished Saving Files \n')

    query = question

    llm = OpenAI(temperature=0, openai_api_key=OPENAI_API_KEY)
    chain = load_qa_chain(llm, chain_type="stuff")

    pinecone.init(
        api_key=PINECONE_KEY,
        environment=PINECONE_ENV
    )
    index_name = "langchain-openai"
    namespace = "scraping"

    embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)

    doclist = Pinecone.from_existing_index(index_name, embeddings, namespace=namespace)

    docs = doclist.similarity_search(query, include_metadata=True, namespace=namespace)

    answer = str(chain.run(input_documents=docs, question=query))

    return {"answer": answer}

