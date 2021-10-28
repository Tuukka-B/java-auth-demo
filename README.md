## Linux Instructions if you want to generate Javascript Bundle yourself:
1. install nvm: https://github.com/nvm-sh/nvm
2. install npm
```bash
nvm install --lts=dubnium
nvm use --lts=dubnium
```
3. fix npm issues, if any 
```bash
npm audit fix
```
4. generate a bundle
```bash
echo "Setting max RAM amount so Vue compiles"
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p && sudo sysctl --system
cd <project root>/src/client
npm i
npm run build
```

## Linux instructions for JAVA:
```bash
sudo apt install openjdk-11-jre-headless
sudo apt install maven
cd <project root path>
mvn clean install
java -jar target/java-auth-demo-0.0.1-SNAPSHOT.jar
```
Then go to http://localhost:8080/index.html and start testing!