from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from config import settings

Base = declarative_base()

engine = create_engine(url=settings.DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)
