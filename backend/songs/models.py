from django.db import models
from django.contrib.auth import get_user_model
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from artists.models import Artist


User = get_user_model()

class Category(models.Model):
    cat_name = models.CharField(max_length=200)
    nominated_songs = models.ManyToManyField('Song', related_name='categories', blank=True)

    def __str__(self):
        return self.cat_name

    class Meta:
        verbose_name_plural = 'Categories'


class Song(models.Model):
    song_name = models.CharField(max_length=255)
    artist = models.ForeignKey('artists.Artist', on_delete=models.CASCADE)
    features = models.ManyToManyField('artists.Artist', related_name='featured_artists', blank=True)
    img = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/'
        , processors=[ResizeToFill(500, 500)],
        format='JPEG',
        options={'quality': 100}
    )

    def __str__(self):
        return self.song_name


class SongVote(models.Model):
    song_choice = models.ForeignKey('Song', on_delete=models.CASCADE)
    voter_id = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        print('Saving Vote Instance')
        super(SongVote, self).save(*args, **kwargs)

    def __str__(self):
        return 'Vote Instance'
