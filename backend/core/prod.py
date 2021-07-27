from .base import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['stevemazin.pythonanywhere.com', 'localhost', '127.0. 0.1']

try:
    from .credentials import *
except ImportError:
    pass
