# Hausaufgabe vom 13.12.2024
# Ferientracker

datum = input("Bitte gib hier das Datum ein, was du nachschauen möchtest: (JJJJ.MM.DD)")

winter = datum >= "2024.12.24" and datum <= "2024.12.31" or datum == "2025.01.01"

fruehling = datum >= "2025.04.18" and datum <= "2025.04.21"

sommer = datum >= "2025.08.11" and datum <= "2025.08.19"

winter2 = datum >= "2025.12.24" and datum <= "2025.12.31" or datum == "2026.01.01"

feiertage = [
    "2025.05.29",
    "2025.05.01",
    "2025.06.09",
    "2025.10.03",
]

if winter:
    print("Es sind Winterferien. Nächster Schultag am: 2025.01.02")

elif fruehling:
    print("Es sind Frühlingsferien. Nächster Schultag am: 2025.04.22")

elif sommer:
    print("Es sind Sommerferien. Nächster Schultag am: 2025.08.20")

elif winter2:
    print("Es sind Winterferien. Nächster Schultag am: 2026.01.02")

elif datum in feiertage:
    print("Es ist ein Feiertag")

else:
    print("Kein/e Ferien/Feiertag.")
