# Zadanie rekrutacyjne dla Code & Pepper

## Przedstawienie aplikacji

Aplikacja pobiera dane z zewnętrznego serwera API
```text
https://swapi.dev/documentation
```
i losuje różne postaci w celu walki między sobą, kto ma większą ilość punktów "crew" lub "mass".
Wygrany gracz uzyskuje jeden punkt. 

Użytkownik może zresetować wszystkie punkty. Można również wybrać
po czym należy losować danego gracza (domyślnie: ALL):
* all (wszyscy)
* people (ludzie)
* starships (statki)

Aplikacja różni się trochę od strony webowej, ponieważ brakuje tutaj funkcji wydzielenia odpowiednich ID z api,
a są one wstawione bezpośrednio w pliku utils. Przyczyną tego były notoroczyne CORSY po stronie SWAPI. 

## Instalacja
Aby zainstalować aplikacje na swoim komputerze należy
uruchomić komendę

```text
npm install
```

Następnie należy zainstalować oprogramowanie Expo korzystąc z
```text
https://docs.expo.io/
```

Oraz zainstalować aplikację na Android lub IOS

```text
Expo Go
```

Podłączyć telefon kablem do komputera i pozwolić na przesyłanie plików.
(Opcje programistyczne)

Następnie uruchomić komendę

```text
npm start
```

Po przeniesieniu nas na stronę w przeglądarce wciskamy kolejno: 

```text
LOCAL
->
Run on Android device/emulator
```
