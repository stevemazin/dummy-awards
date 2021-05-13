from django.contrib import admin
from .models import Artist, ArtistVote, Category


admin.site.register(Artist)
admin.site.register(ArtistVote)
admin.site.register(Category)
