from django.shortcuts import render
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny

class LatestPostsView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = PostSerializer
    queryset = Post.objects.order_by('-timestamp')[:6]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
