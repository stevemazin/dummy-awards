from django.urls import path
from .views import CategoryView, SongView, SongVoteView

urlpatterns = [
    path('', SongView.as_view(), name='songs'),
    path('categories/', CategoryView.as_view(), name='song_categories'),
    path('vote/', SongVoteView.as_view(), name='song_vote'),
]
