from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from .models import Route, Spot
from .serializers import (RouteSerializer, SearchRequestSerializer,
                          SpotSerializer, UserSerializer)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class RouteViewSet(viewsets.ModelViewSet):
    queryset = Route.objects.all()
    serializer_class = RouteSerializer

    @action(detail=False)
    def search(self, request):
        serializer = SearchRequestSerializer(data=request.query_params)
        serializer.is_valid(raise_exception=True)

        route = Route.objects.filter(**serializer.validated_data).first()
        if route is None:
            raise ValidationError('No matching route found')

        serializer = SpotSerializer(route.spots, many=True)
        return Response(serializer.data)


class SpotViewSet(viewsets.ModelViewSet):
    queryset = Spot.objects.all()
    serializer_class = SpotSerializer
