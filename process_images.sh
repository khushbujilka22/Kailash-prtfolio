#!/bin/bash
set -e
echo "Setting up virtual environment..."
python3 -m venv /tmp/venv
source /tmp/venv/bin/activate
echo "Installing rembg..."
pip install "rembg[cli,cpu]"
echo "Processing images..."
rembg i /Users/khushbujilka/.gemini/antigravity/brain/8a004ce0-17fb-485a-9c56-8f7a14145721/.user_uploaded/media_1786085828862.jpg /Users/khushbujilka/development/react-native/portfolio-hub/public/images/new_ci_casting_1.png
rembg i /Users/khushbujilka/.gemini/antigravity/brain/8a004ce0-17fb-485a-9c56-8f7a14145721/.user_uploaded/media_1786085837210.jpg /Users/khushbujilka/development/react-native/portfolio-hub/public/images/new_ci_casting_2.png
rembg i /Users/khushbujilka/.gemini/antigravity/brain/8a004ce0-17fb-485a-9c56-8f7a14145721/.user_uploaded/media_1786085840932.jpg /Users/khushbujilka/development/react-native/portfolio-hub/public/images/new_ci_casting_3.png
rembg i /Users/khushbujilka/.gemini/antigravity/brain/8a004ce0-17fb-485a-9c56-8f7a14145721/.user_uploaded/media_1786085844618.jpg /Users/khushbujilka/development/react-native/portfolio-hub/public/images/new_ci_casting_4.png
echo "Done!"
