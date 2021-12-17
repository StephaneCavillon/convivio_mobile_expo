**Mise à jours de de la version de node et installation du JDK:
choco install -y nodejs.install openjdk8

installer android studio
https://developer.android.com/studio

ajouter la variables d'environnement suivante
name: ANDROID_HOME
value: path\to\Android\Sdk

ajouter la variable suivante au Path:
path\to\Android\Sdk\platform-tools

build the application:
  check that you run npm max npm 7.24.2
  *expo build:android

