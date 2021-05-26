from rest_framework import serializers
from .models import Song, Category, SongVote

class SongVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongVote
        fields = ('song_choice', 'voter_id', 'category',)


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ('id', 'song_name', 'artist', 'features', 'img', )


class CategorySerializer(serializers.ModelSerializer):
    nominated_songs = SongSerializer(many=True)
    class Meta:
        model = Category
        fields = ('id', 'cat_name', 'nominated_songs',)
