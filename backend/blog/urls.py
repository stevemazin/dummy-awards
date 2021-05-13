from django.urls import path
from .views import LatestPostsView

urlpatterns = [
    path('',  LatestPostsView.as_view(), name='latest_posts')
]
