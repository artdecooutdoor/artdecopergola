#!/bin/bash
# Video optimization script
# Usage: ./optimize-video.sh

# Original video
INPUT="public/media/video/pergola.webm"
OUTPUT="public/media/video/pergola-optimized.webm"
POSTER="public/media/video/pergola-poster.webp"

echo "🎬 Optimizing video..."
echo "Original size: $(du -h $INPUT | cut -f1)"

# Convert to lower bitrate WebM (VP9)
ffmpeg -i $INPUT \
  -c:v libvpx-vp9 \
  -b:v 1500k \
  -maxrate 2000k \
  -c:a libopus \
  -b:a 96k \
  -preset 6 \
  $OUTPUT

echo "✅ Optimized size: $(du -h $OUTPUT | cut -f1)"
echo "Savings: $(( $(du -b $INPUT | cut -f1) - $(du -b $OUTPUT | cut -f1) )) bytes"

# Generate poster image (first frame)
ffmpeg -i $INPUT -ss 00:00:00 -vframes 1 -vf scale=1280:-1 $POSTER
echo "📸 Poster created: $POSTER"
