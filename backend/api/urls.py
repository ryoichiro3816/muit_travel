from django.urls import include, path
from rest_framework import routers

from .views import RouteViewSet, SpotViewSet, UserViewSet

router = routers.DefaultRouter()
router.register("users", UserViewSet)
router.register("spots", SpotViewSet)
router.register("routes", RouteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
