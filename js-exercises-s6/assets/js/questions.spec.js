describe("", function() {
  it('Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"', function () {
      var langages = CreationTableauLangages();
      expect(langages).toEqual(["Html","CSS","Java","PHP"]);
  });
  it('Créer un tableau "nombres" contenant les nombres de 0 à 5', function () {
      var nombres = CreationTableauNombres();
      expect(nombres).toEqual([0,1,2,3,4,5]);
  });
  it('Remplacer le troisième élément du tableau par "Javascript"', function () {
      var langages = ["Html","CSS","Java","PHP"];
      var langages = RemplacementElement(langages);
      expect(langages).toEqual(['Html', 'CSS', 'Javascript', 'PHP']);
  });
  it('Ajouter "Ruby" et "Python" à la fin du tableau', function () {
      var langages = ['Html', 'CSS', 'Javascript', 'PHP'];
      var langages = AjoutElementLangages(langages);
      expect(langages).toEqual(['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
  });
  it('Ajouter "-2" et "-1" au début du tableau nombres', function () {
      var nombres = [0,1,2,3,4,5];
      var nombres = AjoutElementNombres(nombres);
      expect(nombres).toEqual([-2,-1,0,1,2,3,4,5]);
  });
  it('Supprimer le premier élément du tableau langages', function () {
      var langages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      var langages = SuppressionPremierElement(langages);
      expect(langages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
  });
  it('Supprimer le dernier élément du tableau langages', function () {
      var langages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      var langages = SuppressionDernierElement(langages);
      expect(langages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby']);
  });
  it('Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"', function () {
      var reseaux_sociaux_chaine = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
      var reseaux_sociaux = ConversionChaineTableau(reseaux_sociaux_chaine);
      expect(reseaux_sociaux).toEqual(['Facebook','Twitter', 'Google +','Viadeo','LinkedIn']);
  });
  it('Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule', function () {
      var langages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
      var langages_chaine = ConversionTableauChaine(langages);
      expect(langages_chaine).toEqual("CSS,Javascript,PHP,Ruby");
  });
  it('Trier le tableau "reseaux_sociaux"', function () {
      var reseaux_sociaux = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
      var reseaux_sociaux = TriTableau(reseaux_sociaux);
      expect(reseaux_sociaux).toEqual(['Facebook','Google +','LinkedIn','Twitter','Viadeo']);
  });
  it('Bonus : Inverser le tableau "langages"', function () {
      var langages = ['CSS','Javascript','PHP','Ruby'];
      var langages = InversionTableau(langages);
      expect(langages).toEqual(["Ruby", "PHP", "Javascript", "CSS"]);
  });
});
