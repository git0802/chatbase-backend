from fastapi import FastAPI
import chatbot
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://www.chatbot.dtonomy.com",
    "https://www.chatbot.dtonomy.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chatbot.router)
