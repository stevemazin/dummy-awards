from django.db import models
from django.contrib.auth import get_user_model
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill


User = get_user_model()


class Movie(models.Model):
    movie_name = models.CharField(max_length=255)
    poster = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/'
        , processors=[ResizeToFill(500, 500)],
        format='JPEG',
        options={'quality': 100}
    )

    def __str__(self):
        return self.movie_name


class Category(models.Model):
    cat_name = models.CharField(max_length=200)
    nominated_movies = models.ManyToManyField('Movie', related_name='categories', blank=True)

    def __str__(self):
        return self.cat_name

    class Meta:
        verbose_name_plural = 'Categories'


class MovieVote(models.Model):
    movie_choice = models.ForeignKey('Movie', on_delete=models.CASCADE)
    voter_id = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        print('Saving Vote Instance')
        super(MovieVote, self).save(*args, **kwargs)

    def __str__(self):
        return 'Vote Instance'
