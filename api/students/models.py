from django.utils.translation import gettext_lazy as _
from django.db.models import Model, CharField

class Student(Model):
    name = CharField(
        _('Student name'),
        unique=True,
        max_length=200
    )

    def __str__(self):
        return self.name
