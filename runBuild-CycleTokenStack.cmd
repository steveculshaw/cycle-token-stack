@echo off

REM =================================================
REM Run Script Cycle Token Stack BUILD {rsctsbuild}
REM =================================================

set VERSION=0.6.3
set TGT=cycle-token-stack.zip
cd C:\OneDrive\Resources\code-repos\cycle-token-stack\
C:

:START
cls
echo.
echo building Cycle Token Stack version: %VERSION%

:ZIPSTEPS
echo.
echo remove old zip ...
if exist %TGT% del %TGT%
echo create new zip ...
7z a -r -tzip -aoa -xr!.git -x!*.py -x!*.sh %TGT% *.*

:GITSTEPS
echo.
echo.
echo git commit changes for version: %VERSION% ...
git commit -a -m "stage and commit from Cycle Token Stack build script version: %VERSION%"

echo.
echo.
echo push changes to GitHub ...
git push origin master

:ALLDONE
echo.
echo all done ...

pause

REM timeout 5
