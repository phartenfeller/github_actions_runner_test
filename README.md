# GitHub Actions Runner

## Setup Ubuntu Docker Container

Pull Image:
```
docker pull ubuntu:eoan
```

Start Container:
```
docker run -d -t --name=github-runner ubuntu:eoan
```

Install curl
```
apt update && apt -y install curl && apt -y install nodejs
```

Add user
```
adduser slave
su - slave
```

## Setup Runner

Go to GitHub repo -> Settings -> Actions -> Add runner
