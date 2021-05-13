from django.db import models
from PIL import Image

# ImageKit
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill


class Post(models.Model):
    headline = models.CharField(max_length=255)
    intro = models.TextField()
    body = models.TextField()
    timestamp = models.DateField(auto_now_add=True)
    is_published = models.BooleanField(default=True)

    photo_main = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/'
        , processors=[ResizeToFill(1280, 720)],
        format='JPEG',
        options={'quality': 100}
    )
    # Thumbnail photo of the main image
    photo_thumb = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/',
        processors=[ResizeToFill(640, 480)],
        format='JPEG',
        options={'quality': 100}
    )
    photo_1 = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/',
        blank=True,
        processors=[ResizeToFill(1280, 720)],
        format='JPEG',
        options={'quality': 100}
    )
    photo_2 = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/',
        blank=True,
        processors=[ResizeToFill(1280, 720)],
        format='JPEG',
        options={'quality': 100}
    )

    def __str__(self):
        return self.headline

