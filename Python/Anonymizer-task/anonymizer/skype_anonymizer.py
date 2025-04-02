"""Skype username anonymizer module."""

from .base_anonymizer import BaseAnonymizer
import re


class SkypeUsernameAnonymizer(BaseAnonymizer):
    """Skype username anonymizer.

    Sample usages (parametrized):
    >>> SkypeUsernameAnonymizer('#').anonymize('<a href="skype:loren?call"/>')
    '<a href="skype:#?call"/>'
    >>> SkypeUsernameAnonymizer('#').anonymize('<a href="skype:LOREN?chat"/>')
    '<a href="skype:#?chat"/>'
    """

    def __init__(self, replacement):
        """
        :param str replacement:
        """
        if not isinstance(replacement, str):
            raise ValueError("Replacement must be a string")
        self._repl = replacement

    def anonymize(self, text):
        """
        :param str text:
        :rtype: str
        """
        if not isinstance(text, str):
            raise ValueError("Input must be a string")
            
        # Pattern to match Skype usernames in HTML attributes
        # It handles skype:username?call or skype:username?chat patterns
        pattern = r'(skype:)([a-zA-Z0-9]+)(\?[a-zA-Z]+)'
        
        # Replace the username part with the replacement character
        return re.sub(pattern, r'\1' + self._repl + r'\3', text)
