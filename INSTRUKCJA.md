# Instrukcja Obsługi Grankers Team LinkHub

Poniżej znajdziesz informacje, jak edytować zawartość strony. Wszystkie zmiany wykonuje się w pliku `App.tsx` (oraz dodając pliki do folderu).

## 1. Logo (Zdjęcie profilowe)
Strona jest skonfigurowana, aby pobierać logo z pliku o nazwie `channel_logo.png`.

**Co musisz zrobić:**
1. Przygotuj plik graficzny (najlepiej kwadratowy PNG z przezroczystością).
2. Zmień jego nazwę na `channel_logo.png`.
3. Wgraj go do głównego folderu repozytorium na GitHub (tam, gdzie leżą pliki `index.html`, `App.tsx`, `package.json`).

Jeśli chcesz zmienić nazwę pliku, edytuj linię 9 w pliku `App.tsx`:
```typescript
const LOGO_URL = "./twoja_nowa_nazwa.png";
```

## 2. Jak edytować istniejące linki?
Wszystkie linki znajdują się w pliku `App.tsx` w tablicy o nazwie `const links`. Wygląda ona tak:

```typescript
const links: LinkItem[] = [
    {
      id: 'skool',
      title: t.links.skoolTitle, // Tytuł pobierany z tłmaczeń (patrz pkt 4)
      subtext: t.links.skoolSub, // Podtytuł z tłumaczeń
      url: 'https://www.skool.com/...', // ADRES URL - TU ZMIENIASZ LINK
      icon: Users, // Ikona (musi być zaimportowana na górze pliku)
      special: true // Czy link ma się świecić na złoto?
    },
    // ... kolejne linki
];
```
Aby zmienić adres URL, po prostu podmień tekst w cudzysłowie przy polu `url`.

## 3. Jak dodać nowy link (sekcję)?
1. Otwórz `App.tsx`.
2. Znajdź tablicę `links`.
3. Skopiuj jeden z istniejących obiektów (klamry `{ ... }`) i wklej go na koniec listy, przed zamknięciem tablicy `]`.
4. Uzupełnij dane.

Przykład dodania Instagrama:
```typescript
    {
      id: 'instagram',
      title: "Nasz Instagram", // Możesz wpisać tekst na sztywno: "Nasz Instagram"
      subtext: "Zobacz zdjęcia",
      url: 'https://instagram.com/grankers', 
      icon: Users // Pamiętaj, żeby zaimportować ikonę 'Instagram' z 'lucide-react' na samej górze pliku, jeśli jest dostępna, lub użyć innej.
    },
```

## 4. Edycja tekstów i tłumaczeń (PL / EN)
Teksty znajdują się w obiekcie `translations` na początku pliku `App.tsx`.

```typescript
const translations = {
  pl: {
    links: {
       skoolTitle: "Dołącz do Grankers Team na Skool",
       // ... edytuj polskie teksty tutaj
    }
  },
  en: {
    links: {
       skoolTitle: "Join Grankers Team on Skool",
       // ... edytuj angielskie teksty tutaj
    }
  }
};
```

## 5. Formularz Kontaktowy
Jeśli chcesz, aby formularz działał i wysyłał maile bezpośrednio (bez otwierania programu pocztowego):
1. Wejdź w plik `components/ContactForm.tsx`.
2. Znajdź linię `const FORMSPREE_ID = "mjknljev";`.
3. Zarejestruj się na [formspree.io](https://formspree.io), utwórz formularz i podmień ten kod na swój własny.
