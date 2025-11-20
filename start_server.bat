@echo off
cd /d C:\Coding\coachingBusiness\launch-to-lead
echo Starting server from: %CD%
dir *.html
python -m http.server 8002
