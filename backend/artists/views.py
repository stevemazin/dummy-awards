from .serializers import CategorySerializer, ArtistSerializer, ArtistVoteSerializer
from .models import Category, Artist, ArtistVote
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework import generics
from rest_framework import status

class ArtistView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class CategoryView(generics.ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)



class ArtistVoteView(generics.ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = ArtistVoteSerializer
    queryset = ArtistVote.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = request.data
        voter_id = data['voter_id']
        category = data['category']

        print(f'Vote Data (UserID): {voter_id}')
        print(f'Vote Data (Category Chosen): {category}')

        exists = ArtistVote.objects.filter(voter_id=voter_id, category=category).exists()
        if(exists):
            print('Test Log: This User has already voted in this Category')
            return Response({"Error": "User has already voted in this Category"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return self.create(request, *args, **kwargs)
