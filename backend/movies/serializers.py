from rest_framework import serializers
from .models import Movie, MovieVote, Category

class MovieVoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieVote
        fields = ('movie_choice', 'voter_id', 'category',)


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'movie_name', 'img')


class CategorySerializer(serializers.ModelSerializer):
    nominated_movies = MovieSerializer(many=True)
    
    class Meta:
        model = Category
        fields = ('id', 'cat_name', 'nominated_movies',)
