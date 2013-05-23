@echo off
set amberHome=..\amber
xcopy /S /-Y st %amberHome%\st
xcopy /S /-Y js %amberHome%\js
xcopy /S /-Y css %amberHome%\css
xcopy /S /-Y *.html %amberHome%\

