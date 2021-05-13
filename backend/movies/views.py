from .serializers import CategorySerializer, MovieSerializer, MovieVoteSerializer
from .models import Category, Movie, MovieVote
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework import generics
from rest_framework import status

class MovieView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class CategoryView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)



class MovieVoteView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = MovieVoteSerializer
    queryset = MovieVote.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = request.data
        voter_id = data['voter_id']
        category = data['category']

        print(f'Vote Data (UserID): {voter_id}')
        print(f'Vote Data (Category Chosen): {category}')

        exists = MovieVote.objects.filter(voter_id=voter_id, category=category).exists()

        if(exists):
            print('Test Log: This User has already voted in this Category')
            return Response({"Error": "User has already voted in this Category"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return self.create(request, *args, **kwargs)
