from sqlalchemy import ForeignKey, Date, String, Column, Integer
import datetime
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from main import db

Base = declarative_base()

class UnitOfMeasure(db.Model):
  __tablename__ = 'unit_of_measure'
  id = Column("measure_id", Integer, primary_key=True)
  name = Column("measure_name", String)


class Ingredient(db.Model):
  __tablename__ = 'ingredient'
  id = Column('ingredient_id', Integer, primary_key=True)
  name = Column("ingredient_name", String)
  ingredient_type = Column("ingredient_type", String)

# if i delete a recipe - then ingredients
# should be removed from ingredients table
# by recipe but ingredient and uom still will
# exist which is ok

# no association to this parent on children (?)
# https://docs.sqlalchemy.org/en/13/orm/basic_relationships.html
class Ingredients(db.Model):
  __tablename__ = "ingredients"
  id = Column('ingredients_id', Integer, primary_key=True)
  # Ingredients to Ingredient is Many to One relationship
  ingredient_id = Column(Integer, ForeignKey('ingredient.id'))
  ingredient = relationship("Ingredient")
  quantity = Column("quantity", Integer)
  # Ingredients to UoM is Many to One relationship
  measure_id = Column(Integer, ForeignKey("measure_id"))
  unit_measure = relationship("UnitOfMeasure")
  # Recipe to Ingredients is a One to Many relationship
  recipe_id = Column(Integer, ForeignKey("recipe.id"))
