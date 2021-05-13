from rest_framework import serializers
from .models import Song, Category, SongVote

class SongVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongVote
        fields = ('song_choice', 'voter_id', 'category',)


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ('song_name', 'artist', 'features', 'cover_art', )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'cat_name', 'nominated_songs',)
