from rest_framework import serializers
from .models import Artist, ArtistVote, Category

class ArtistVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtistVote
        fields = ('artist_choice', 'voter_id', 'category',)


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'img', 'artist_name',)


class CategorySerializer(serializers.ModelSerializer):
    nominated_artists = ArtistSerializer(many=True)
    class Meta:
        model = Category
        fields = ('id', 'cat_name', 'nominated_artists',)
