# Elegante Lösung

note_11 = input("Gib Zahl 1 ein:")  # string
note_11_int = int(note_11)

print(f"Der Typ von Zahl1 ist: {type(note_11)}")
print(f"Der Typ von Zahl1 ist: {type(note_11_int)}")

note_12 = input("Gib Zahl 2 ein:")

print(f"Der Typ von Zahl 2 ist: {type(note_12)}")

addition_zahl11_12 = note_11 + note_12

print(f"Das Ergebnis ist {addition_zahl11_12}")




person1 = input("Wie alt bist du?: ")
person1_int = int(person1)

person2 = input("Wie alt bist du?: ")
person2_int = int(person2)

print(f"Alter Person 1: {type(person1_int)}")
print(f"Alter Person 2: {type(person2_int)}")

addition_person1_2 = person1_int + person2_int

print(f"Das Ergebnis ist: {addition_person1_2}")