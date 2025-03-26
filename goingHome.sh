#!/bin/bash

# Add all files to git
git add .

# Commit with a message including the current date and time
commit_message="Done for the day $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$commit_message"

# Push the changes to the remote repository
git push

# chmod +x goingHome.sh
# ./goingHome.sh