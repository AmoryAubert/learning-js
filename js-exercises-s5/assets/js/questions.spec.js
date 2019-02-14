'use strict';

describe('Les chaines de caractères : ', function () {

    it('Donner la taille de la chaine de caractères', function () {
        var result = tailleString('Ce texte à une certaine taille');
        expect(result).toEqual(30);
    });

    it('Remplacer le premier e de la chaine par un espace', function () {
        var result = remplaceECar('Ce texte à une certaine taille');
        expect(result).toEqual('C  texte à une certaine taille');
    });

    it('Concatener les deux chaines de caractères', function () {
        var result = concatString('Le javascript est ', 'super');
        expect(result).toEqual('Le javascript est super');
    });

    it('Afficher le cinquième caractère de la chaine', function () {
        var result = afficherCar5('Ces exercices sont super!');
        expect(result).toEqual('e');
    });

    it('Afficher les 9 premiers caractères', function () {
        var result = afficher9Car('Je dirait même qu\'ils sont excellent');
        expect(result).toEqual('Je dirait');
    });

    it('Mettre en majuscule la chaine', function () {
        var result = majusculeString('Un autre excellent exercice');
        expect(result).toEqual('UN AUTRE EXCELLENT EXERCICE');
    });

    it('Mettre en minuscule la chaine', function () {
        var result = minusculeString('Celui ci aussi!');
        expect(result).toEqual('celui ci aussi!');
    });
    it('Supprimer les espaces avant et après la chaine', function () {
        var result = SupprEspaceString(' Rome ne s\'est pas construite en un jour ');
        expect(result).toEqual('Rome ne s\'est pas construite en un jour');
    });
    it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
        var result = IsString('Est ce une chaine de caractères ?');
        expect(result).toEqual(true);
    });
    it('Afficher l\'extension du fichier', function () {
        var result = AfficherExtensionString('images/photo01.jpg');
        expect(result).toEqual('jpg');
    });
    it('Compter le nombre d\'espace dans la chaine', function () {
        var result = NombreEspaceString('Sire ouvrez on en a gros!');
        expect(result).toEqual(5);
    });
    it('Inverser une chaine de caractères', function () {
        var result = InverseString('Après demain, à partir d\'aujourd\'hui?');
        expect(result).toEqual('?iuh\'druojua\'d ritrap à ,niamed sèrpA');
    });
})
describe('Les nombres et opérations mathématiques : ', function () {
    it('Calculer la puissance d\'un nombre par rapport à un autre (x à la puissance y)', function () {
        var result = calculPuissance(2, 3);
        expect(result).toEqual(8);
    });
    it('Afficher la valeur absolue d\'un nombre', function () {
        var result = valeurAbsolue(-5);
        expect(result).toEqual(5);
    });
    it('Afficher les valeurs absolues de plusieurs nombres', function () {
        var result = valeurAbsolueArray([-5,-50,-25,-568]);
        expect(result).toEqual([5,50,25,568]);
    });
    it('Calculer la surface d\'un cercle en fonction de son rayon. L\'arondir à l\'entier le plus proche', function () {
        var result = sufaceCercle(5);
        expect(result).toEqual(79);
    });
    it('Calculer l\'hypthènuse d\'un triangle rectangle', function () {
        var result = hypothenuse(5, 8);
        expect(result).toEqual(9.433981132056603);
    });
    it('Calculer l\'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.', function () {
        var result = calculIMC(65, 1.75);
        expect(result).toEqual(21.22);
    });
})