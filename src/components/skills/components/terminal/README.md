# Terminal

Le terminal s'adapte au conteneur dans lequel il est placé.
Si le conteneur a une largeur de 400px, alors le terminal sera de 400px.

## Props

1. Nom : S'affiche dans l'utilisateur du terminal, exemple : `nom@root:~$`

2. Body : Un composant complet avec les styles que vous préférez, celui-ci s'affichera dans le corps du terminal

## Variables CSS

1. `--terminal-icons-color`, la couleur dans laquelle s'afficheront les icônes de fermeture, d'agrandissement et de réduction au survol. Si non définie, ce sera #000a

2. `--terminal-minimize-btn`, couleur du bouton de réduction

3. `--terminal-maximize-btn`, couleur du bouton d'agrandissement du terminal

4. `--terminal-close-btn`, couleur du bouton de fermeture du terminal

5. `--terminal-background`, couleur de fond du terminal

6. `--terminal-user-color`, couleur dans laquelle s'affichera l'utilisateur dans le terminal

7. `--terminal-separator-color`, couleur du séparateur "~"

8. `--terminal-title-bar-background`, arrière-plan de l'en-tête du terminal