from flask import render_template, Blueprint, request
from app.models import UnitOfMeasure
from app import app, db

uom_admin_view = Blueprint('admin_view', __name__, url_prefix="/admin")

@uom_admin_view.route("/admin/uom", methods=["GET"])
def admin_uom():
  return render_template("uom.html")

@uom_admin_view.route("/admin/uom", methods=["POST"])
def admin_add_uom():
    uom = UnitOfMeasure(
      name=request.form['uom_name'],
    )
    db.session.add(uom)
    db.session.commit()
    return render_template("uom.html")