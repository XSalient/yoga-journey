@echo off
rem Central launcher hub for this repository.
rem Starts the Launch Hub declared in launchers.json.
cd /d "%~dp0"
npm run dev
