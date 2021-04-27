from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated
from webapp.models import User
from webapp.api.serializers import UserSerializer


class UserListView(ListAPIView):
	permission_classes = [IsAuthenticated]
	queryset = User.objects.all()
	serializer_class = UserSerializer

class UserCreateView(CreateAPIView):
	queryset = User.objects.all()
	serializer_class = UserSerializer
