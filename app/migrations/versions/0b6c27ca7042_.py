"""empty message

Revision ID: 0b6c27ca7042
Revises: 0b5e21502459
Create Date: 2019-12-05 13:54:28.476564

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0b6c27ca7042'
down_revision = '0b5e21502459'
branch_labels = None
depends_on = None


def upgrade():
    op.alter_column('ingredients', 'recipe_id', nullable=False)
    pass


def downgrade():
    pass
