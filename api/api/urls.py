from django.contrib import admin
from django.urls import path

from students.views import StudentsList

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/students/', StudentsList.as_view())
]
