Kuvia käyttöliittymästä:

```markdown
![Kirjautumissivu](public/img/kirjautumissivu.png)
```

```markdown
![Uuden merkinnän lisääminen, sivun yläosa](public/img/uusimerkinta1.png)
```

```markdown
![Uuden merkinnän lisääminen, lomake sivun alaosassa](public/img/uusimerkinta2.png)
```

```markdown
![Haetut päiväkirjamerkinnät, sivun yläosa](public/img/historia1.png)
```

```markdown
![Haetut päiväkirjamerkinnät, sivun alaosa](public/img/historia2.png)
```
TOIMII: Rekisteröinnin kautta pystyy lisäämään uusia käyttäjiä ja kirjautumisesta kirjautumaan sisään.
TOIMII: Kirjautuneena voi lisätä uusia merkintöjä sekä hakea omat merkintänsä päiväkirjasta.

VIIMEISTELEMÄTTÄ: Jotkut lomakkeet eivät tyhjenny heti tallennuksen jälkeen. Uloskirjautumisnappulaa ei ole. 
Päiväkirjasivulla kummittelee yksi tyhjä merkintäkortti ennen merkintöjen hakua.

Tietokannassa on taulut users ja diaryentries(viiteavaimena user_id).
