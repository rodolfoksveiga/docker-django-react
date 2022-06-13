from rest_framework.generics import ListAPIView
from .models import Student
from .serializers import StudentSerializer

class StudentsList(ListAPIView):
    model = Student
    serializer_class = StudentSerializer
    queryset = Student.objects.all()
