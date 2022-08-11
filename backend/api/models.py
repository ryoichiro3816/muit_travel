from django.db import models


class DestinationType(models.TextChoices):
    HOKKAIDO = 'HOKKAIDO', 'Hokkaido'
    KANAGAWA = 'KANAGAWA', 'Kanagawa'
    OKINAWA = 'OKINAWA', 'Okinawa'


class EventType(models.TextChoices):
    OUTDOOR = 'OUTDOOR', 'Outdoor'
    INDOOR = 'INDOOR', 'Indoor'
    FOOD = 'FOOD', 'Food'
    HOT_SPRING = 'HOT_SPRING', 'HotSpring'


class Route(models.Model):
    destination_type = models.CharField(max_length=16, choices=DestinationType.choices)
    event_type = models.CharField(max_length=16, choices=EventType.choices)


class Spot(models.Model):
    route = models.ForeignKey(Route, related_name='spots', on_delete=models.CASCADE)
    name = models.CharField(max_length=16)
    time = models.TimeField()
    picture = models.ImageField()
    description = models.TextField()
