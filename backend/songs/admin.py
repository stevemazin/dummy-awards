from django.contrib import admin
from .models import SongVote, Category, Song

admin.site.register(Category)
admin.site.register(SongVote)
admin.site.register(Song)
