## Linux Instructions if you want to generate Javascript Bundle yourself:
1. install nvm: https://github.com/nvm-sh/nvm
3. install npm
```bash
nvm install --lts=dubnium
nvm use --lts=dubnium
```
4. fix npm issues, if any 
```bash
npm audit fix
```
5. generate a bundle
```bash
cd <project root>/src/client
npm run build
```

## Linux instructions for JAVA:
```bash
sudo apt install openjdk-11-jre-headless
sudo apt install maven
cd <project root path>
mvn clean install
java -jar target/spring-boot-pre-assignment-0.0.1-SNAPSHOT.jar
```
Then go to http://localhost:8080/index.html and start testing!