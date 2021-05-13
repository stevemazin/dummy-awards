from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth import get_user_model
from .forms import UserAdminCreationForm, UserAdminChangeForm
from django.utils.translation import gettext as _

from rest_framework_simplejwt.token_blacklist.models import OutstandingToken
from rest_framework_simplejwt.token_blacklist.admin import OutstandingTokenAdmin as OTA



User = get_user_model()

class OutstandingTokenAdmin(OTA):

    def has_delete_permission(self, *args, **kwargs):
        return True # or whatever logic you want

admin.site.unregister(OutstandingToken)
admin.site.register(OutstandingToken, OutstandingTokenAdmin)



class UserAdmin(BaseUserAdmin):
    # The forms to add and change user instances
    form = UserAdminChangeForm
    add_form = UserAdminCreationForm

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name')}),
        (_('Permissions'), {'fields': ('is_active', 'staff', 'superuser')}),
        (_('Important dates'), {'fields': ('last_login',)})
    )
    add_fieldsets = (
        (None, { 'classes': ('wide',), 'fields': ('first_name', 'last_name', 'email', 'password', 'password_2')}),
        (_('Permissions'), {'fields': ('is_active', 'staff', 'superuser')}),
    )


    ordering = ['id']
    list_display = ['first_name', 'last_name',  'email', 'staff' ]
    list_filter = ['staff']
    search_fields = ['first_name', 'last_name']
    filter_horizontal = ()


# Remove Group Model from admin. We're not using it.
admin.site.unregister(Group)
admin.site.register(User, UserAdmin)