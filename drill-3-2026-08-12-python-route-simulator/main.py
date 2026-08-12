from router import get_route


print("\n===== SIMPLE ROUTE SIMULATOR =====")
print("1. City Hall")
print("2. SM City")
print("3. Airport")
print("4. Exit")

choice = input("\nChoose your destination: ").strip()

if choice == "1":
    destination = "city_hall"

elif choice == "2":
    destination = "sm_city"

elif choice == "3":
    destination = "airport"

elif choice == "4":
    print("Route simulator closed.")
    exit()

else:
    print("Invalid destination.")
    exit()

route = get_route(destination)

print("\nYour route:")
print(route)