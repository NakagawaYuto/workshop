from rest_framework import routers
from .views import BlogViewSet, CommentViewSet


router = routers.DefaultRouter()
router.register(r'blog', BlogViewSet)
router.register(r'comment', CommentViewSet)

urlpatterns = [
]

urlpatterns += router.urls
