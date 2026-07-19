# Barangay Visitor Log

visitors = []

while True:

    print("\n--- Barangay Visitor Log ---")

    name = input("Enter visitor name: ")
    purpose = input("Enter visitor purpose: ")

    visitor = {
        "name": name,
        "purpose": purpose
    }

    visitors.append(visitor)

    again = input("Add another visitor? (YES/NO): ")

    if again.upper() == "NO":
        break

print("\n--- Recorded Visitors ---")

for visitor in visitors:

    print("Name:", visitor["name"])
    print("Purpose:", visitor["purpose"])
    print("-------------------------")

print("Total visitors recorded:", len(visitors))