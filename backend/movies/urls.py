from django.urls import path
from .views import CategoryView, MovieView, MovieVoteView

urlpatterns = [
    path('', MovieView.as_view(), name='movies'),
    path('categories/', CategoryView.as_view(), name='movie_categories'),
    path('vote/', MovieVoteView.as_view(), name='movie_vote'),
]
