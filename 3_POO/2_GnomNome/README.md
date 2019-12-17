# Gnomnome, développer un jeu pour apprendre la POO et les héritages  
Voici l'exemple du jeu que je vous propose de développer [ici](https://www.exlineo.com/dev/gnome).  
  
## Des commentaires  
En premier lieu, je vous fournis les fichiers de base qui vous permettent de structurer votre développement. Le fichier HTML peut être gardé tel quel. Il ne devrait pas y avoir besoin de le modifier sauf si l'import de classes vous paraît trop abscons.
La structure des fichiers Javascript vous est fournie. Vous remarquerez quelques propositions dans un ou deux qui vous donnera à réfléchir sur les techniques à utiliser.
Les vocations principales de cet exercices sont de vous amener à découvrir la programmation orientée objet en Javascript et à envisager le façon de modéliser un ensemble de classes vers un objectif.
Pour les fichiers Javascript, voici l'organisation des scripts :  
1 - Objet : c'est le fichier de la classe Objet dont hériteront les bombes et les humanoïdes  
2 - Humanoide : La classe du même nom dont hériteront le héros et le monstre  
3 - Heros : la classe du héros qui bouge et attrape des monstres  
4 - Monstre : le monstre infernal à attraper  
5 - Bombe : un objet placé aléatoirement en quantités croissantes  
6 - Plateau : la classe qui dessine le plateau et permet l'affichage des différents objets du jeu : score, fond, timer, monstre, héros...  
7 - Mecanique : la classe qui regroupe toute la mécanique du jeu, le calcul des collisions, les lites d'objets...  
8 - Init : le launcher du jeu qui va instancier la mécanique et gérer les événements de clavier.  
  
## Des questions ?  
Il vaut mieux voir directement à la source et me contacter. C'est déjà un niveau avancé et technique.  
  
"Quand les flots montent, le bateau s'élève" ... Là ça va pas être facile mais c'est à votre portée.