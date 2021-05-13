from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('headline', 'intro', 'body', 'timestamp', 'is_published', 'photo_thumb', 'photo_main', 'photo_1', 'photo_2',)
