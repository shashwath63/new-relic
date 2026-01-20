#!/bin/bash

# Update system
sudo apt update && sudo apt upgrade -y

# Install Git
sudo apt install git -y

# Install Node.js (using NodeSource for latest LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node -v
npm -v

# Install PM2 globally
sudo npm install -g pm2

echo "Setup complete! You can now clone your repository."
