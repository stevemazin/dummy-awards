# Generated by Django 3.2 on 2021-05-10 19:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import imagekit.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('artists', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cat_name', models.CharField(max_length=200)),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('song_name', models.CharField(max_length=255)),
                ('cover_art', imagekit.models.fields.ProcessedImageField(upload_to='photos/%Y/%m/%d/')),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='artists.artist')),
                ('features', models.ManyToManyField(blank=True, related_name='featured_artists', to='artists.Artist')),
            ],
        ),
        migrations.CreateModel(
            name='SongVote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='songs.category')),
                ('song_choice', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='songs.song')),
                ('voter_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='category',
            name='nominated_songs',
            field=models.ManyToManyField(blank=True, related_name='categories', to='songs.Song'),
        ),
    ]
