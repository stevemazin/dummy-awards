from django.contrib import admin
from .models import Movie, MovieVote, Category

admin.site.register(Movie)
admin.site.register(Category)
admin.site.register(MovieVote)
