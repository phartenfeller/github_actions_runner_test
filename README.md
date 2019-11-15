# GitHub Actions Runner

## Setup Ubuntu Docker Container

Pull Image:
```
docker build -t github-runner-image .
```

Start Container:
```
docker run -d -t --name=github-runner github-runner-image:latest
```

Add user und switch to user
```
adduser slave
su - slave
```

## Setup Runner

Go to GitHub repo -> Settings -> Actions -> Add runner
