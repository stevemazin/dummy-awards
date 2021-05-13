# Generated by Django 3.2 on 2021-05-07 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_alter_user_is_superuser'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='is_staff',
            new_name='admin',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='is_superuser',
            new_name='staff',
        ),
        migrations.RemoveField(
            model_name='user',
            name='groups',
        ),
        migrations.RemoveField(
            model_name='user',
            name='user_permissions',
        ),
        migrations.AddField(
            model_name='user',
            name='superuser',
            field=models.BooleanField(default=False),
        ),
    ]
