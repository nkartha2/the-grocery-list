from flask import render_template, Blueprint, request
from app.models import UnitOfMeasure
from app import app, db

uom_admin_view = Blueprint('uom_admin_view', __name__, url_prefix="/api/v1/")


@uom_admin_view.route("/admin/add_uom", methods=["POST"])
def admin_add_uom():
    uom = UnitOfMeasure(
      name=request.json['uom_name'],
    )
    db.session.add(uom)
    db.session.commit()
    return render_template("uom.html")