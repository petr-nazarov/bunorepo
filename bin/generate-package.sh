#!/bin/bash
#This scipt is used to generate a package 
#If you wnat to generate an app - just move the package to the app folder. 
name="${1-newpackage}"
echo Generating packages/$name...
cp -r ./packages/package-template ./packages/$name
grep -rl 'package-template' ./packages/$name | xargs sed -i "s/package-template/$name/g"
echo Done!
