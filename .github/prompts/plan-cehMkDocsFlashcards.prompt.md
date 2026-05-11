# Plan: CEH MkDocs Site mit Flashcards

## TL;DR
MkDocs Material Site für CEH-Zusammenfassungen mit interaktiven Flashcards pro Modul. Flashcards werden per JavaScript bei jedem Seitenaufruf gemischt und verlinken zurück zum Kapitel. Deployment via GitHub Actions auf GitHub Pages. Prototyp mit 2 Dummy-Modulen.

## Phase 1: MkDocs Projekt Setup

1. **Python-Abhängigkeiten definieren** — `requirements.txt` mit `mkdocs-material` erstellen
2. **`mkdocs.yml` erstellen** — Material-Theme konfigurieren mit:
   - `theme.name: material` + Farbschema, Sprache `de`, Navigation features (`navigation.tabs`, `navigation.sections`, `navigation.top`)
   - `extra_css` → `docs/stylesheets/flashcards.css`
   - `extra_javascript` → `docs/javascripts/flashcards.js`
   - `nav`-Struktur mit Modulen + Flashcard-Seiten
   - `markdown_extensions` für `attr_list`, `md_in_html` (nötig für custom HTML in Markdown)
3. **Verzeichnisstruktur anlegen:**
   ```
   docs/
   ├── index.md                                    # Startseite
   ├── modules/
   │   ├── module-01-intro/
   │   │   ├── index.md                            # Modul-Übersicht
   │   │   ├── information-security.md             # Kapitel
   │   │   ├── hacking-concepts.md                 # Kapitel
   │   │   └── flashcards.md                       # Flashcards (letzter Nav-Eintrag)
   │   └── module-02-footprinting/
   │       ├── index.md
   │       ├── search-engines.md
   │       ├── whois-dns.md
   │       └── flashcards.md
   ├── stylesheets/
   │   └── flashcards.css
   └── javascripts/
       └── flashcards.js
   ```

## Phase 2: Flashcard-System (Custom JS/CSS)

4. **Flashcard HTML-Struktur in Markdown** — Jede `flashcards.md` enthält HTML-Blöcke:
   - Container `<div class="flashcard-deck">` mit Kind-Elementen `<div class="flashcard" data-chapter="./hacking-concepts/#section">`
   - Jede Karte hat `<div class="flashcard-front">` (Frage) und `<div class="flashcard-back">` (Antwort)
   - `data-chapter`-Attribut enthält relativen Link zum Kapitel/Abschnitt (kurze relative Pfade im selben Ordner)
5. **`flashcards.css`** — CSS für:
   - Card-Grid-Layout (responsive, 1-3 Karten pro Reihe)
   - 3D Flip-Animation via `transform: rotateY(180deg)` auf Klick (`.flipped` Klasse)
   - Styling für Vorder-/Rückseite (`backface-visibility: hidden`)
   - Kapitel-Link-Button auf der Rückseite
6. **`flashcards.js`** — JavaScript für:
   - `DOMContentLoaded`: Alle `.flashcard`-Elemente im `.flashcard-deck` sammeln
   - Fisher-Yates Shuffle auf die DOM-Elemente anwenden und neu einfügen
   - Click-Handler für Flip-Toggle (`.flipped` Klasse)
   - Kapitel-Link aus `data-chapter` auslesen und als klickbaren Link rendern

## Phase 3: Dummy-Inhalte (Prototyp)

7. **`docs/index.md`** — Startseite mit Projektbeschreibung und Links zu Modulen
8. **Modul 1 Ordner** `docs/modules/module-01-intro/`:
   - `index.md` — Modulübersicht "Introduction to Ethical Hacking"
   - `information-security.md` — Dummy-Kapitel mit H2-Abschnitten (Anker-Ziele für Flashcards)
   - `hacking-concepts.md` — Dummy-Kapitel
   - `flashcards.md` — 5 Dummy-Flashcards mit Links zu den Kapiteln im selben Ordner
9. **Modul 2 Ordner** `docs/modules/module-02-footprinting/`:
   - `index.md` — Modulübersicht "Footprinting and Reconnaissance"
   - `search-engines.md` — Dummy-Kapitel
   - `whois-dns.md` — Dummy-Kapitel
   - `flashcards.md` — 5 Dummy-Flashcards

## Phase 4: GitHub Actions Deployment

13. **`.github/workflows/ci.yml`** — GitHub Actions Workflow:
    - Trigger auf `push` zu `main`
    - `actions/checkout`, `actions/setup-python`, `actions/cache`
    - `pip install -r requirements.txt`
    - `mkdocs gh-deploy --force`
14. **README.md aktualisieren** — Kurze Projektbeschreibung + lokale Dev-Anleitung (`pip install -r requirements.txt && mkdocs serve`)

## Relevante Dateien (alle neu)

- `mkdocs.yml` — Haupt-Konfiguration, Theme, Nav, Extensions, extra_css/js
- `requirements.txt` — `mkdocs-material`
- `docs/index.md` — Startseite
- `docs/modules/module-01-intro/` — index.md, information-security.md, hacking-concepts.md, flashcards.md
- `docs/modules/module-02-footprinting/` — index.md, search-engines.md, whois-dns.md, flashcards.md
- `docs/stylesheets/flashcards.css` — Karten-Styling + Flip-Animation
- `docs/javascripts/flashcards.js` — Shuffle + Interaktion
- `.github/workflows/ci.yml` — CI/CD Pipeline

## Verification

1. `pip install -r requirements.txt && mkdocs serve` — Lokaler Dev-Server startet ohne Fehler
2. Startseite zeigt Navigation zu Modulen und Flashcards
3. Modul-Seiten rendern Dummy-Inhalt mit korrekten Anker-IDs
4. Flashcard-Seite: Karten erscheinen bei jedem Reload in anderer Reihenfolge
5. Klick auf Karte → Flip-Animation zeigt Rückseite mit Antwort
6. "Zum Kapitel"-Link auf Rückseite navigiert korrekt zum Abschnitt in der Modul-Seite
7. `mkdocs build` → Kein Fehler, Site wird in `site/` generiert
8. Nach Push → GitHub Actions Workflow läuft durch, Site ist unter `<username>.github.io/certified-ethical-hacker` erreichbar

## Entscheidungen

- **Theme**: MkDocs Material (kostenlos, best-in-class für Docs)
- **Flashcard-Ansatz**: Custom HTML/CSS/JS statt MkDocs-Plugin — kein geeignetes Plugin verfügbar, custom Lösung ist flexibler und kontrollierbar
- **Shuffle**: Client-side per JavaScript (Fisher-Yates) — keine Server-Logik nötig, funktioniert mit Static Site
- **Prototyp-Scope**: 2 Module mit je 5 Flashcards. Alle 20 CEH-Module werden später ergänzt
- **Sprache**: Site-Sprache Deutsch, CEH-Fachbegriffe auf Englisch
