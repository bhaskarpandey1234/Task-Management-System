# from django.urls import path
# from .views import RegisterView, LoginView

# urlpatterns = [
#     path('register/', RegisterView.as_view(), name='register'),
#     path('login/', LoginView.as_view(), name='login'),
# ]
from django.urls import path
from .views import RegisterView, LoginView  # Ensure you're importing the correct LoginView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),  # This should point to your login view
]

