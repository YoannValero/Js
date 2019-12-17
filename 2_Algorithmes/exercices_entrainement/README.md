# Exercices d'algorithmique

## Variables, conditions, répétitions

### Ex 1

    - Créer un programme qui demande à l'utilisateur un identifiant et un mot de passe, puis indique si ces paramètres sont bons ou pas.
    - Créer une variante qui répète la demande tant que les paramètres ne sont pas bons.
    - Créer une variante qui arrête la saisie au bout d'un certain nombre d'essais.

### Ex 2

    - Sur la base de l'exercice précédent, écrire un programme qui détermine si l'utilisateur connecté possède des droits d'administrateur ou pas (droits utilisateur par défaut).

### Ex 3

    - Quelles seront les valeurs des variables A et B après chaque ligne du code suivant ? 

        VAR A,B :entiers 
        DEBUT 
            A ← 3 
            B ← A+3 
            A ← 4 
        FIN

### Ex 4

    - Qu’affiche l’algorithme suivant ? 
    
        VAR A,B:réels C:entier
        DEBUT 
            A ← 2.3
            B ← 3.5 
            C ← A+B 
            Afficher C 
        FIN
    
### Ex 5

    - Quelles seront les valeurs des variables A, B et C après chaque ligne du code suivant ?

        VAR A,B,C :entiers 
        DEBUT 
            A ← 3 
            B ← 5 
            C ← A+B 
            A ← 2 
            C ← B-A 
        FIN

### Ex 6

    - Quelles seront les valeurs des variables A, B et C après chaque ligne du code suivant ?

        VAR A,B :entiers 
        DEBUT 
            A ← 3 
            B ← A+4 
            A ← A+2 
            B ← A-4 
        FIN

### Ex 7

    - Quelles seront les valeurs des variables A, B et C après chaque ligne du code suivant ?

        VAR A,B,C :entiers 
        DEBUT 
            A ← 5 
            B ← 10 
            C ← A+B 
            B ← A+B 
            A ← C 
        FIN

### Ex 8

    - Quelles sont les valeurs de A et B à la fin du code suivant ? Adaptez l’algorithme pour échanger les valeurs de A et B.

        VAR A,B :entiers 
        DEBUT 
            A ← 3 
            B ← 5 
            A ← B 
            B ← A 
        FIN

### Ex 9

    - Qu’affiche l’algorithme suivant ?

        VAR A,B:chaîne 
        DEBUT 
            A ← "123" 
            B ← "456" 
            Afficher A+B 
        FIN

### Ex 10

    - Qu’affiche l’algorithme suivant ?

        VAR A,B:réels C:entier
        DEBUT 
            A ← 2.3
            B ← 3.5
            C ← A+B 
            Afficher C 
        FIN

### Ex 11

    - Écrire un algorithme qui détermine la catégorie sportive d’un utilisateur en fonction de son âge : 
    
        - 18 à 19 ans : junior 
        - 20 à 22 ans : espoir 
        - 23 à 39 ans : sénior 
        - 40 ans et plus : vétéran     

### Ex 12

    - Ecrire un algorithme qui affiche les nombres de 1 à 10 par ordre croissant.
    - Ecrire un algorithme qui affiche les nombres de 1 à 10 par ordre décroissant.
    
### Ex 13

    - Ecrire un algorithme qui affiche les nombres pairs entre 1 et 10.

### Ex 14

    - Ecrire un algorithme qui calcule la somme de valeurs stockées dans un tableau.
    - Ecrire un algorithme qui permet de déterminer la plus grande des valeurs stockées dans un tableau.
    - Ecrire un algorithme qui permet de déterminer la plus petite des valeurs stockées dans un tableau.

### Ex 15

    - Donnez un algorithme qui permet de trouver le nombre d’occurrences d’une valeur entière dans un tableau de 20 valeurs.

### Ex 16

    - Soit un tableau de 5 valeurs entières : écrire un algorithme qui permet de trier les valeurs par ordre croissant.

### Ex 17

    - Ecrire un algorithme qui affiche la table de multiplication de 2.
    - Ecrire un algorithme qui affiche toutes les tables de multiplication.

### Ex 18

    - Ecrire un algorithme qui affiche le nombre de dizaines d'un nombre saisi par l'utilisateur.

### Ex 19

    - Ecrire un algorithme qui calcule le nombre de radiateurs dont on a besoin pour chauffer une pièce. On sait qu’un radiateur est capable de chauffer 8m3. L’utilisateur donnera la longueur, la largeur et la hauteur de la pièce en mètres.
    - Créer une fonction prenant la longueur, la largeur et la hauteur de la pièce en paramètre et qui renvoie le nombre de radiateurs nécessaires.

### Ex 20

    - Ecrire un algorithme pour convertir un nombre de secondes en un nombre d’heures, de minutes et de secondes. On utilisera les opérateurs modulo et division entière.

### Ex 21

    -Concevoir un algorithme qui imprime pour n donné : 
        1
        1 2
        1 2 3
        1 2 3 4
        1 2 3 4 5
        ........... 
        1 2 3 4 5 6 ... n

