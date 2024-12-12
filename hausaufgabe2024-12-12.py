# Aufgabe 1
vorname = input("Vorname: ")
nachname = input("Nachname: ")

print(f"Vorname: {(vorname)} {nachname}")

# Aufgabe 2
zahl1 = input("Bitte hier die erste Zahl eingeben: ")
zahl2 = input("Bitte hier die zweite Zahl eingeben: ")

zahl1_int = int(zahl1)
zahl2_int = int(zahl2)

print(f"Zahl 1: {zahl1_int}")
print(f"Zahl 2: {zahl2_int}")

addition_zahl1_2 = zahl1_int + zahl2_int

print(f"Das Ergebnis ist: {addition_zahl1_2}")

# Zusatzaufgabe

zahl = input("Bitte gebe hier eine Zahl ein: ")

if int(zahl) < 0: 
    print("Die Zahl ist negativ")
if int(zahl) > 0: 
    print("Die Zahl ist positiv")  # soweit bin ich nur gekommen