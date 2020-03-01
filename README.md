# firstadobe-xd-plugin

1. Gestire una Repo con Github
2. Creare un Plugin per Adobe XD

## Git da terminale
Scaricare Git (per abilitare le funzioni da terminale): https://git-scm.com/downloads
Gestire una repo git da terminale, andare su Git hub e creare una Repo totalmente blank.

1. Creazione della Repo - echo "# repoUrl" >> README.md
2. Inizializzare la Repo - git init
3. Aggiungere file al commit - git add fileName.ext
4. Fare il commit (master -m) - git commit -m "First commit" 
5. Aggiungere l'origine remota - git remote add origin https://github.com/Spolaa/firstadobe-xd-plugin.git
6. Fare il push delle modifiche - git push -u origin master
7. Eventuale Login 

## Plugin Adobe XD
Processo per creare un plugin base per Aobe XD.  
Nello specifico questo plugin quando viene invoca tramite shourcut su un elemento setta automaticamente un font.

1. Aprire Adobe XD e creare un progetto vuoto.
2. Dal menu nella top base selezionare "Plugins" -> "Developmente" -> "Developer console" (ci serverirà più avanti)
3, Aprure la cartella del plugin "plugins" -> "Development" -> "Show developer folder". Create plugin name folder: "plugin-folder"
4. All'interno dovremmo creare 3 file base il funzionamento dell'applicazione.
    1. File di ingresso: manifest.json
    2. Codice e funzione principale del plugin: main.js
    3. Icona del plugin associata al manifest: images/icon.png (crearla vuota VS Code)
5. Ogni volta che verranno applicate modifiche al plugin, bisogna andare nella "Developer console" aperta prima e tramite lo shortcut "Cmd+Shift+R" si dovrà ricare la pagina. In alternativa "Plugins" -> "Developer" -> "Reload plugin"
6. Eventuali log js verrano mostrati nella Developer Console