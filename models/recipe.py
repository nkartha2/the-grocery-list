
import enum
import datetime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Enum, Date, String, Column, Integer, relationship

class StateEnum(enum.Enum):
  active = 1
  archive = 2
  new = 3

# declarative base that registers model with SQA
# new base class given metaclass that produces
# appropriate Table objects and makes appropriate
# mapper calls
Base = declarative_base()

class Recipe(Base):
  __tablename__ = 'recipes'
  id = Column('recipe_id', Integer, primary_key=True)
  name = Column('recipe_name', String(50))
  link = Column('recipe_link', String(150))
  state = Column('recipe_state', Enum(StateEnum))
  notes = Column('recipe_notes', String(200))
  ingredients = relationship("Ingredients")
  created_at = Column('created_at', Date, onupdate=datetime.datetime.now)
  updated_at = Column('updated_at', Date, onupdate=datetime.datetime.now)

