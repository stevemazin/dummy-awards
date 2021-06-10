from django.db import models
from PIL import Image
from .utils import unique_slug_generator
from django.utils.text import slugify
import string, random

# ImageKit
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

# TinyMCE
from tinymce.models import HTMLField

# ImageKit
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill, Thumbnail


def rand_slug():
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(6))


class Post(models.Model):
    headline = models.CharField(max_length=250)
    intro = models.TextField()
    body = HTMLField('Body')
    slug = models.SlugField(max_length = 250, null = True, blank = True)
    timestamp = models.DateField(auto_now_add=True)
    is_published = models.BooleanField(default=True)

    photo_main = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/'
        , processors=[ResizeToFill(1280, 720)],
        format='JPEG',
        options={'quality': 100}
    )
    # Thumbnail photo of the main image
    main_photo_thumbnail = ProcessedImageField(
        upload_to='photos/%Y/%m/%d/',
        processors=[ResizeToFill(640, 480)],
        format='JPEG',
        options={'quality': 100}
    )

    def __str__(self):
        return self.headline

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.headline + "-" + rand_slug())
        super(Post, self).save(*args, **kwargs)



