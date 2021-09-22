# Cours

## EXERCICE 1

### XML

```xml
<?xml version="1.0.0" encodage="UTF8" ?>
<contacts>
    <contact>
        <id>1<id/>
        <lastname>LARGET<lastname/>
        <firstname>Henri<firstname/>
        <birthdate>1991-12-30<birthdate/>
        <adresse>
            <street1>3 esplanade Augustin Aussedat<street1/>
            <street2>Papeteries Image Factory, Cran-Gevrier<street2/>
            <zip>74000<zip/>
            <city>Annecy<city/>
        <adresse/>
        <family>
            <contact>
                <user>2<user/>
                <status>epouse<status>
            <contact/>
        <family/>
    </contact>
    <contact>
        <id>2<id/>
        <firstname>Nadia<firstname/>
    <contact>
</contacts>    
```

### JSON

```json
[
  {
      "id" : 1,
      "lastname" : "LARGET",
      "firstname" : "Henri",
      "birthdate" : "1991-12-30",
      "adresse" : {
          "street1" : "3 esplanade Augustin Aussedat",
          "street2" : "Papeteries Image Factory, Cran-Gevrier",
          "zip" : "74000",
          "city" : "Annecy"
      },
      "family" : [
        {
            "user" : 2,
            "status" : "epouse"
        }
      ]
  },
  {
      "id" : 2,
      "firstame" : "Nadia"
  }
]   
```

## EXERCICE 2

### JSON

```json
    [
        {
            "matiere" : "Structure de la donnée",
            "note" : 20,
            "type" : "data_struture_tp2",
            "etudiant" : {
                "prenom" : "Loïc",
                "nom" : "Greco"
            }
        }
    ]
```

### CSV

```csv
matiere, note, type, prenom, nom
Structure de la donnée, 20, data_struture_tp2, Loïc, Greco
```

### YAML

```yaml
matiere : "Structure de la donnée"
note : 20
type : "data_struture_tp2"
etudiant : 
    prenom : "Loïc"
    nom : "Greco"
```

La meilleur solution est le csv car etant donner le peu de donner il est plus compact.

## EXERCICE 3

orders.csv

```csv
order_id,lastname,firstname,street1,street2,street3,zip,city
Ar44Zp,HONETE,Marie,3 Esplanades Augustin Aussedat,Papeteries Image Factory,Cran Gevrier,74960,Annecy
RR21P,BON,Jean,1 rue de la paix,,,75000,Paris
```

order_products.csv

```csv
order_id,name,quantity,priceUnit,vat,total
Ar44Zp,clé USB,10,205,410,2460
Ar44Zp,JSON pour les nuls,1,1995,110,2105
RR21P,Comment torturer des étudiants,1,2005,112,2517
RR21P,JSON pour les nuls,1,1995,110,2105
```

## EXERCICE 4

```csv
name,description,prix,categorie,cacahuete,polen
Chocolat,Ce mange,10,dessert,,1
```

```xml
<?xml version="1.0.0" encodage="UTF8" ?>
<plats>
    <plat>
        <name>Chocolat</name>
        <description>Ce mange</description>
        <prix>10</prix>
        <alergens>
            <alergen>cacahuete</alergen>
            <alergen>polen</alergen>
        </alergens>
        <categorie>Dessert</categorie>
    </plat>
</plats>
```

```yaml
name :  Chocolat
description : Ce mange,
prix : 10,
alergenes : 
    - cacahuete
    - polen
categorie : Dessert
```

```json
[
    {
        "name" : "Chocolat",
        "description" : "Ce mange",
        "prix" : 10,
        "alergens" : ["cacahuete","polen"],
        "categorie" : "Dessert"
    }
]
```

## EXERCICE 5

```html
<h1>SCP-101-FR</h1>

<table>
<tr>    
    <td>Objet</td>
    <td>niveau de menace</td>
    <td>Classe</td>
</tr>
<tr>    
    <td>SCP-101-FR</td>
    <td>Rouge</td>
    <td>Keter</td>
</tr>
</table>

<h2>Description</h2>

<strong>SCP-101-FR</strong> est un site internet ayant des capacitÃ©s de mimÃ©tisme numÃ©rique. <strong>SCP-101-FR</strong> est considÃ©rÃ© comme conscient de par sa capacitÃ© Ã  rÃ©agir contre une intrusion extÃ©rieure (piratage informatique) en envoyant un virus hautement infectieux rendant inutilisable l'ordinateur du pirate, puis en faisant Ã©voluer son code de maniÃ¨re Ã  combler la brÃ¨che informatique utilisÃ©e par le pirate.

Son seul objectif semble Ãªtre de dÃ©voiler l'existence de la Fondation aux yeux du monde, c'est pourquoi il faut envisager que <strong>SCP-101-FR</strong> ait pu Ãªtre crÃ©Ã© par un Groupe d'IntÃ©rÃªt connaissant l'existence de la Fondation et cherchant Ã  lui nuire.

<strong>SCP-101-FR</strong> consiste en un site disponible sur l'Internet mondial Ã  l'adresse "<a href="scpwiki.com">scpwiki.com</a>". Ce site se trouve Ãªtre la rÃ©plique quasi-parfaite de l'actuelle base de donnÃ©es de la Fondation. Aucun serveur hÃ©bergeant <strong>SCP-101-FR</strong> n'a pu Ãªtre localisÃ©, toute tentative de remonter jusqu'aux serveurs ayant jusque lÃ  aboutit au crash de l'ordinateur effectuant la recherche ou Ã  son infection par un virus informatique.
```

## EXERCICE 6

---
# SCP-871

| Objet       | niveau de menace | Classe   |
|:-----------:|:----------------:|:--------:|
| SCP-871     | Rouge            | Keter    |

ProcÃ©dures de Confinement SpÃ©ciales
Chaque **SCP-871** doit Ãªtre confinÃ© dans une cellule en bÃ©ton sur une assiette fixÃ©e Ã  une table en bois qui, Ã  son tour, est fixÃ©e au sol de la cellule. Il ne doit pas y avoir plusieurs **SCP-871** dans la mÃªme cellule. Des camÃ©ras doivent Ãªtre placÃ©es dans chaque cellule, qui devra Ãªtre vÃ©rifiÃ©e toutes les 15 minutes.

Lors de l'apparition d'un **SCP-871**, Trois (3) membres du personnel de Classe D doivent Ãªtre escortÃ©s par des gardes armÃ©s en direction de sa cellule, oÃ¹ ils devront Ãªtre enfermÃ©s avec le **SCP-871**, avant qu'il leur soit demander de le consommer. Les Classe-D ne doivent pas prendre plus d'une (1) heure pour parvenir Ã  consommer l'intÃ©gralitÃ© d'un **SCP-871**. En cas de motivation supplÃ©mentaire requise, l'exÃ©cution de l'un des membres de Classe D prÃ©sents dans la cellule est autorisÃ©. Une fois un **SCP-871** entiÃ¨rement consommÃ©, Aucun Classe-D n'est autorisÃ© Ã  sortir avant que les gardes aient vÃ©rifiÃ© qu'aucune trace de **SCP-871** ne soit prÃ©sente dans la salle oÃ¹ sur eux. L'assiette, la table, et la salle doivent Ãªtre intÃ©gralement nettoyÃ©es avant l'arrivÃ©e du prochain **SCP-871**.

Tout membre du personnel de Classe D se montrant particuliÃ¨rement coopÃ©ratif et acceptant de consommer d'autres **SCP-871** peut Ãªtre autorisÃ© Ã  le faire. Les Classes-D montrant une utilitÃ© exceptionnelle dans la complÃ©tion de cette tÃ¢che verront leur date d'exÃ©cution reportÃ©e. Ces derniers ne doivent en aucun cas Ãªtre utilisÃ©s dans des expÃ©riences liÃ©es Ã  d'autres SCP.

Aucun dessert, de n'importe quel type, ne doit Ãªtre servi dans les Ã©tablissements possÃ©dant un ou des **SCP-871**.

![alt text](https://course.larget.fr/2021-2022/b2-gobelins/data-structures/tp/tp2-resources/cake.jpg)

## Description

**SCP-871** est une collection de 237 cakes. Les **SCP-871** varient Ã©normÃ©ment en matiÃ¨re de taille et d'apparence. Le plus petit **SCP-871** observÃ© Ã©tait un cupcake de 15 grammes. Le plus grand Ã©tait un baumkuchen de vingt-deux (22) kilogrammes de 2 mÃ¨tres de diamÃ¨tre.

Lorsqu'un **SCP-871** est consommÃ© par un humain ou groupe d'humains, celui-ci est remplacÃ© par une copie conforme dans un laps de temps de 24 heures. Ce dernier apparaÃ®tra sur une surface plane Ã  proximitÃ© de l'endroit oÃ¹ **SCP-871** fut consommÃ©. Si un **SCP-871** est endommagÃ© d'une autre maniÃ¨re qu'en Ã©tant consommÃ© par un Ãªtre humain (Ãªtre consommÃ© par un Ãªtre non-humain est considÃ©rÃ© comme une autre forme d'endommagement), il sera remplacÃ© instantanÃ©ment. Les rÃ©pliques crÃ©Ã©es de cette maniÃ¨re reprennent un rythme rÃ©gulier de rÃ©paration ou re-crÃ©ation. La faÃ§on dont **SCP-871** se recrÃ©e est Ã  ce jour incomprise.

Une observation permit de montrer que les diffÃ©rents **SCP-871** "mutaient" au cours du temps, avec quelques modifications mineures dans l'apparence du gÃ¢teau au cours de ses nombreuses re-crÃ©ations, et des modifications plus importantes se produisant dans environ 5 % des re-crÃ©ations. Aucun effet nuisible n'a jamais Ã©tÃ© le rÃ©sultat de la consommation d'un **SCP-871**, mÃªme lorsque plusieurs **SCP-871** ont Ã©tÃ© consommÃ©s; la seule exception Ã©tant les effets prÃ©visibles aprÃ¨s une consommation importante de gÃ¢teaux.

Le danger que **SCP-871** reprÃ©sente vient des consÃ©quences amenÃ©es par le fait de ne pas le consommer. Tout **SCP-871** n'Ã©tant pas digÃ©rÃ© par un humain crÃ©era un autre **SCP-871** Ã  proximitÃ© aprÃ¨s 24 heures. Ce processus est similaire Ã  sa mÃ©thode de "rÃ©paration" ; cependant, les deux versions du **SCP-871** manifesteraient les effets dÃ©crits, se "re-crÃ©ant" toutes les 24 heures, et se dupliquant Ã  nouveau si personne ne venait Ã  les consommer. Cet effet se produira Ã  la place du processus de rÃ©paration si au moins 10 % du premier gÃ¢teau n'ont pas Ã©tÃ© consommÃ©s. Comme il n'y a aucun moyen connu de stopper le processus de duplication, tout **SCP-871** non confinÃ© pourrait se cloner exponentiellement, devenant trÃ¨s rapidement impossible Ã  contrÃ´ler. Aucun plan concret visant Ã  confiner plus de 20 000 **SCP-871** n'a encore Ã©tÃ© mis au point. Une estimation suggÃ¨re qu'une brÃ¨che de confinement laissant un seul **SCP-871** se dÃ©cupler rendrait la terre inhabitable en 80 jours.

---

## EXERCICE 6

```html
<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="13.4" width="400" height="373.6" stroke="grey" stroke-width="2" fill="none" />
  <circle cx="200" cy="200" r="100" stroke="black" stroke-width="2" fill="none" />
  <circle cx="100" cy="200" r="100" stroke="red" stroke-width="2" fill="none" />
  <circle cx="300" cy="200" r="100" stroke="blue" stroke-width="2" fill="none" />
  <circle cx="250" cy="113.4" r="100" stroke="yellow" stroke-width="2" fill="none" />
  <circle cx="250" cy="286.6" r="100" stroke="pink" stroke-width="2" fill="none" />
  <circle cx="150" cy="113.4" r="100" stroke="green" stroke-width="2" fill="none" />
  <circle cx="150" cy="286.6" r="100" stroke="grey" stroke-width="2" fill="none" />
  <polygon stroke="black" stroke-width="2" fill="none" points="250,113.4 150,113.4  100,200   150,286.6 250,286.6 300,200 " />
</svg>
```

![alt text](./rosace.svg)

## MODELISATION

```json
[
    {
        "idStudent" : 0,
        "firstname" : "Loïc",
        "lastname" : "greco",
        "series" : [
            {
                "idSeries" : 0,
                "responseQuestion" : [
                    {
                    "idQuestion" : "00",
                    "reponses" : [true,true,true,true],
                    "result" : false
                }
                ...
            ],
            ...
            } 
        ]
        "total" : 39
    }
]
,
[
    {
        "idQuestion" : 0,
        "position" : 1,
        "question" : "text",
        "image" : "monimage",
        "video" : "mavideo",
        "responses" : [
            {
                "idReponse" : 0,
                "reponse" : "la reponse",
                "valid" : true
            }
            ...
        ]
    }
    ...
]
```

