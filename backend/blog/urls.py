from django.urls import path
from .views import LatestPostsView, SinglePostPostView

urlpatterns = [
    path('',  LatestPostsView.as_view(), name='latest_posts'),
    path('<str:slug>',  SinglePostPostView.as_view(), name='post_detail'),

]
