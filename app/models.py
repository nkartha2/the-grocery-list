
import enum
import datetime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Date, Enum, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from app import db


class RecipeState(enum.Enum):
  active = 1
  archive = 2
  new = 3

# declarative base that registers model with SQA
# new base class given metaclass that produces
# appropriate Table objects and makes appropriate
# mapper calls
Base = declarative_base()

class UnitOfMeasure(db.Model):
  __tablename__ = 'unit_of_measure'
  id = Column("measure_id", Integer, primary_key=True)
  name = Column("measure_name", String)


class Ingredient(db.Model):
  __tablename__ = 'ingredient'
  id = Column('ingredient_id', Integer, primary_key=True)
  name = Column("ingredient_name", String, unique=True)
  ingredient_type = Column("ingredient_type", String)

# if a recipe is deleted - then ingredients
# should be removed from ingredients table
# by recipe but ingredient and uom still will
# exist which is ok
class Recipe(db.Model):
  __tablename__ = 'recipes'
  id = Column('recipe_id', Integer, primary_key=True)
  name = Column('recipe_name', String(50))
  link = Column('recipe_link', String(150), unique=True)
  state = Column('recipe_state', Enum(RecipeState))
  notes = Column('recipe_notes', String(200))
  ingredients = relationship("Ingredients")
  created_at = Column('created_at', Date, onupdate=datetime.datetime.now)
  updated_at = Column('updated_at', Date, onupdate=datetime.datetime.now)


class Ingredients(db.Model):
  __tablename__ = 'ingredients'
  id = Column('ingredients_id', Integer, primary_key=True)
  # Ingredients to Ingredient is Many to One relationship
  ingredient = relationship(Ingredient)
  ingredient_id = Column(Integer, ForeignKey(Ingredient.id))
  quantity = Column('quantity', Integer)
  # Ingredients to UoM is Many to One relationship
  unit_measure = relationship(UnitOfMeasure)
  measure_id = Column(Integer, ForeignKey(UnitOfMeasure.id))
  # Recipe to Ingredients is a One to Many relationship
  recipe_id = Column(Integer, ForeignKey(Recipe.id))
