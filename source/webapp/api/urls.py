from django.urls import path, include
from webapp.api.views import UserListView, UserCreateView, UserDeleteView


urlpatterns = [
	path('', UserListView.as_view(), name="user_list"),
	path('user/create/', UserCreateView.as_view(), name="user-create"),
	path('<int:pk>/delete/', UserDeleteView.as_view(), name="user-delete"),
	path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]