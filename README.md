# Chordloop

Chordloop is a chord progression player for songwriters and learners. Pick a key, build a progression, loop it with strum or arpeggio patterns, and upload a song to find its chords. It is a Node.js (Express) app packaged with Docker and published to Docker Hub.

## Features

- Key picker for all 12 keys, in major or minor
- Preset progressions such as I V vi IV and i VI III VII
- Playing patterns: block chords, strums, arpeggios and fingerpicking
- Looping playback with tempo control (50 to 200 BPM)
- Highlighted active chord with beat indicators
- Editable progression: change, reorder, add and delete chords
- Optional 7th chords
- Chord detection from an uploaded audio file or the microphone

## Tech used

GitHub, Linux (Ubuntu on AWS EC2), Node.js, Express, Docker, Docker Hub

## Project structure

```
chordloop-app/
├── app.js          Express server
├── package.json    Dependencies and start script
├── Dockerfile      Instructions to build the image
├── public/
│   └── index.html  The chord player page
└── screenshots/    Images used in this README
```

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Run with Docker

```bash
docker build -t YOUR-DOCKERHUB-USERNAME/chordloop-app:1.0 .
docker run -d -p 3000:3000 YOUR-DOCKERHUB-USERNAME/chordloop-app:1.0
```

## Deployment steps

1. Built the app and pushed it to GitHub
2. Cloned the repository on a Linux server
3. Built the Docker image and tagged it with my Docker Hub username
4. Logged in to Docker Hub and pushed the image
5. Pulled the image from Docker Hub
6. Ran the container and opened the app in the browser

## Screenshots

### 1. Docker build
Command: `docker build -t YOUR-DOCKERHUB-USERNAME/chordloop-app:1.0 .`

![Docker build](screenshots/docker-build.png)

### 2. Image on Docker Hub
![Docker Hub image](screenshots/dockerhub-image.png)

### 3. Running container
Command: `docker ps`

![Running container](screenshots/docker-ps.png)

### 4. Live application
![Live application](screenshots/live-app.png)

## Notes

- Microphone detection only works on localhost or an https address. On a plain http server address, use the audio file upload instead.
- Chord detection is approximate. It works best on simple songs with clear guitar or piano.
