# Generated by Django 5.0.6 on 2024-07-17 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timeapp', '0008_timetable_timeset'),
    ]

    operations = [
        migrations.AddField(
            model_name='stream',
            name='code',
            field=models.CharField(max_length=50, null=True),
        ),
    ]