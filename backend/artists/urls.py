from django.urls import path
from .views import CategoryView, ArtistView, ArtistVoteView

urlpatterns = [
    path('', ArtistView.as_view(), name='artists'),
    path('categories/', CategoryView.as_view(), name='artist_categories'),
    path('vote/', ArtistVoteView.as_view(), name='artist_vote'),
]
