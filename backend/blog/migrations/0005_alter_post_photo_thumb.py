# Generated by Django 3.2 on 2021-05-11 05:11

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_post_photo_2'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='photo_thumb',
            field=imagekit.models.fields.ProcessedImageField(upload_to='photos/%Y/%m/%d/'),
        ),
    ]
