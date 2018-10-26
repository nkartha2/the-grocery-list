from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime, func, Enum

Base = declarative_base()

class RecipeState(Enum):
    archived = 1
    pending = 1
    approved = 1

class TimeStampMixin(object):
    created_at = Column(DateTime, default=func.now())

class Recipe(Base, TimeStampMixin):
    # high level information regarding a recipe
    __tablename__ = 'recipes'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    link = Column(String)
    state = Column('value', Enum(RecipeState))
