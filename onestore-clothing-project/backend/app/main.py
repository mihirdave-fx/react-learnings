from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from fastapi.staticfiles import StaticFiles

import os

from app.db.database import Base, engine
from app.models.product import Product
from app.routers.product import router as product_router


@asynccontextmanager
async def lifespan(app: FastAPI):

    print("Application Starting...")

    Base.metadata.create_all(bind=engine)

    yield

    print("Application Shutting Down...")


app = FastAPI(
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("app/static/uploads", exist_ok=True)
app.mount("/static", StaticFiles(directory="app/static"), name="static")

app.include_router(product_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to the Onestore Clothing API"
    }