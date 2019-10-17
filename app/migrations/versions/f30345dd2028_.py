"""empty message

Revision ID: f30345dd2028
Revises: 4b575885fda6
Create Date: 2019-10-17 13:43:41.480377

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f30345dd2028'
down_revision = '4b575885fda6'
branch_labels = None
depends_on = None


def upgrade():
    op.create_unique_constraint(constraint_name='uq_ingredient_name', table_name='ingredient', columns=["ingredient_name"])
    pass


def downgrade():
    op.drop_constraint(constraint_name='uq_ingredient_name', table_name='ingredient')
    pass
