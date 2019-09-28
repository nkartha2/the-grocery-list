from sqlalchemy import create_engine
from config import DATABASE_URI
from models.recipe import Base

engine = create_engine(DATABASE_URI)
Base.metadata.create_all(engine)
