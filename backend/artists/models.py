from django.db import models
from django.contrib.auth import get_user_model
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

User = get_user_model()


class Artist(models.Model):
    artist_name = models.CharField(max_length=255)
    img = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/'
        , processors=[ResizeToFill(500, 500)],
        format='JPEG',
        options={'quality': 100}
    )

    def __str__(self):
        return self.artist_name


class Category(models.Model):
    cat_name = models.CharField(max_length=200)
    nominated_artists = models.ManyToManyField('artists.Artist', related_name='categories', blank=True)

    def __str__(self):
        return self.cat_name

    class Meta:
        verbose_name_plural = 'Categories'


class ArtistVote(models.Model):
    artist_choice = models.ForeignKey('artists.Artist', on_delete=models.CASCADE)
    voter_id = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey('artists.Category', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        print('Saving')
        super(ArtistVote, self).save(*args, **kwargs)

    def __str__(self):
            return 'Vote Instance'
