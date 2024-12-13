# Aufgabe 1

geburtsjahr = input("Gib dein Geburtsjahr an: ")

a = 1999
b = 1978

if geburtsjahr >= 2011 and geburtsjahr <= 2025:
    print("Gen Alpha")

elif geburtsjahr == 1999:
    print("Nices Jahr.")

elif geburtsjahr < 2025:
    print("bist nicht mal geboren - wtf")

else:
    print("Zu alt.")

# Aufgabe 2

punktezahl = input("Gib hier eine beliebige Zahl ein: ")

punktezahl_float = float(punktezahl)

if punktezahl_float >= 95:
    print("Richtig gut gemacht! Macher.")

elif punktezahl_float >= 75:
    print("Ja, nice gemacht!")

elif not (punktezahl_float > 25):
    print("Hätte besser laufen können")

else:
    print("Jo, geht klar.")

# Aufgabe 3

x = 7
y = 3
z = 10

if x > y and x < z:
    print(" ")
