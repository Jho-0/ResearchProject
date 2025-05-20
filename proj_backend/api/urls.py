# api/urls.py
from django.urls import path
from .views import CustomLoginView
from .serializers import UserListView
from rest_framework_simplejwt.views import TokenRefreshView
from .views import CreateUserView

urlpatterns = [
    path('login/', CustomLoginView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('get-user/', UserListView.as_view(), name='get_user'),
   path('create-user/', CreateUserView.as_view(), name='create_user'),
]
