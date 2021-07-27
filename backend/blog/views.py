from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny

from core.settings import base

class LatestPostsView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-timestamp')[:5]


    def get(self, request, *args, **kwargs):
        print(base.BASE_DIR)
        return self.list(request, *args, **kwargs)

class SinglePostPostView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = 'slug'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
