from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tasks.urls')),  # Ensure this file has the correct URLs
    path('api/', include('users.urls')),   # Ensure this file is also included
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Add this line

]
