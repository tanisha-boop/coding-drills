from models import books


def show_books():

    print("\n===== ALL BOOKS =====")

    for index, book in enumerate(books, start=1):

        status = "Borrowed" if book["borrowed"] else "Available"

        print(f"{index}. {book['title']}")
        print("   Author:", book["author"])
        print("   Status:", status)

        if book["borrowed"]:
            print("   Borrowed By:", book["borrowed_by"])

        print()


def borrow_book():

    show_books()

    choice = int(input("Enter book number: ")) - 1

    if books[choice]["borrowed"]:
        print("Book is already borrowed.")

    else:

        student = input("Enter student name: ")

        books[choice]["borrowed"] = True
        books[choice]["borrowed_by"] = student

        print("Book borrowed successfully.")


def return_book():

    show_books()

    choice = int(input("Enter book number: ")) - 1

    if books[choice]["borrowed"]:

        books[choice]["borrowed"] = False
        books[choice]["borrowed_by"] = ""

        print("Book returned successfully.")

    else:

        print("Book is already available.")


def available_books():

    print("\n===== AVAILABLE BOOKS =====")

    found = False

    for book in books:

        if not book["borrowed"]:

            print(book["title"])
            found = True

    if not found:
        print("No available books.")


def borrowed_books():

    print("\n===== BORROWED BOOKS =====")

    found = False

    for book in books:

        if book["borrowed"]:

            print(f"{book['title']} - Borrowed by {book['borrowed_by']}")
            found = True

    if not found:
        print("No borrowed books.")