"""empty message

Revision ID: 88e79940b620
Revises: 0b6c27ca7042
Create Date: 2020-02-24 13:19:36.032396

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '88e79940b620'
down_revision = '0b6c27ca7042'
branch_labels = None
depends_on = None


def upgrade():
  op.alter_column('recipes', 'created_at', type_=sa.DateTime)
  op.alter_column('recipes', 'updated_at', type_=sa.DateTime)
  pass
    # ### end Alembic commands ###


def downgrade():
  op.alter_column('recipes', 'created_at', type_=sa.Date)
  op.alter_column('recipes', 'updated_at', type_=sa.Date)
  pass
    # ### end Alembic commands ###
