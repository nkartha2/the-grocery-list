"""empty message

Revision ID: 0b5e21502459
Revises: f30345dd2028
Create Date: 2019-12-04 17:06:52.899711

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0b5e21502459'
down_revision = 'f30345dd2028'
branch_labels = None
depends_on = None


def upgrade():
    op.create_unique_constraint(constraint_name='uq_uom_name', table_name='unit_of_measure', columns=['measure_name'])
    pass

def downgrade():
    op.drop_constraint(constraint_name='uq_uom_name', table_name='unit_of_measure')
    pass
