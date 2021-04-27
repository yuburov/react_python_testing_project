from django.urls import path, include
from webapp.api.views import UserListView, UserCreateView


urlpatterns = [
	path('', UserListView.as_view(), name="user_list"),
	path('user/create/', UserCreateView.as_view(), name="user-create"),
	path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]