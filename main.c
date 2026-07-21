#include <stdio.h>
#include <string.h>

char name[100];
char nickname[50];
char birthday[20];
char address[100];
char song[100];
char motivation[300];
char support[300];

int petChoice;

void loadingAnimation();
void displayProfile();
void motivationAnalysis();
void displaySummary();

int main()
{
    strcpy(name, "Tanisha Jalaf");
    strcpy(nickname, "Nishu");
    strcpy(birthday, "02/14/2005");
    strcpy(address, "Mandurriao, Iloilo City");
    strcpy(song, "Greedy by TateMcRae");
    strcpy(motivation, "My future self pushes me through this sem to fulfill my dreams and goals with determination to succeed; knowing that all the hard work will be worth it.");
    strcpy(support, "The only support that I need to make this semester comfortable is within myself. I need to maintain a healthy routine where I have a positive mindset, a better emotional balance, and a fulfilled heart.");

    petChoice = 1;      

    loadingAnimation();
    displayProfile();
    motivationAnalysis();
    displaySummary();

    return 0;
}

void loadingAnimation()
{
    printf("\nGenerating your profile");

    for(int i = 0; i < 5; i++)
        printf(".");

    printf("\n");
    printf("Profile Successfully Generated!\n\n");
}

void displayProfile()
{
    printf("Hello, %s!\n", nickname);
    printf("Thank you for sharing your information.\n\n");

    if(petChoice == 1)
    {
        printf("************************************************************\n");
        printf("*                🐶 DOG PERSON PROFILE 🐶                  *\n");
        printf("************************************************************\n\n");

        printf("      / \\__\n");
        printf("     (    @\\___\n");
        printf("     /         O\n");
        printf("    /   (_____/\n");
        printf("   /_____/   U\n\n");
    }
    else
    {
        printf("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
        printf("~                 🐱 CAT PERSON PROFILE 🐱                 ~\n");
        printf("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n");

        printf("      /\\_/\\\\\n");
        printf("     ( o.o )\n");
        printf("      > ^ <\n\n");
    }

    printf("Name         : %s (%s)\n", name, nickname);
    printf("Birthday     : %s\n", birthday);
    printf("Address      : %s\n", address);
    printf("Fav Song     : %s\n", song);
    printf("Motivation   : %s\n", motivation);
    printf("Support      : %s\n", support);

    printf("\n=========================================\n");
    printf("PROFILE STATISTICS\n");
    printf("=========================================\n");

    printf("Name Characters       : %lu\n", strlen(name));
    printf("Song Characters       : %lu\n", strlen(song));
    printf("Motivation Characters : %lu\n", strlen(motivation));

    printf("\nSemester Confidence\n");

    if(petChoice == 1)
        printf("[██████████] 100%%\n");
    else
        printf("[████████░░] 80%%\n");

    if(petChoice == 1)
    {
        printf("\n************************************************************\n");
        printf("Dogs are loyal, brave, and energetic!\n");
        printf("Good luck this semester! 🐶\n");
        printf("************************************************************\n");
    }
    else
    {
        printf("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
        printf("Cats are calm, curious, and independent!\n");
        printf("Have an amazing semester! 🐱\n");
        printf("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
    }
}

void motivationAnalysis()
{
    printf("\n=========================================\n");
    printf("MOTIVATION ANALYSIS\n");
    printf("=========================================\n");

    if(strstr(motivation,"family") || strstr(motivation,"Family"))
    {
        printf("❤️ Your family is a wonderful source of inspiration.\n");
    }
    else if(strstr(motivation,"graduate") || strstr(motivation,"Graduation"))
    {
        printf("🎓 Keep working toward your graduation!\n");
    }
    else if(strstr(motivation,"God") || strstr(motivation,"god"))
    {
        printf("🙏 Faith can give strength during difficult times.\n");
    }
    else if(strstr(motivation,"dream"))
    {
        printf("⭐ Never stop chasing your dreams.\n");
    }
    else
    {
        printf("💪 Stay focused and believe in yourself!\n");
    }
}

void displaySummary()
{
    printf("\n=========================================\n");
    printf("PROFILE SUMMARY\n");
    printf("=========================================\n");

    if(petChoice == 1)
        printf("Pet Preference : Dog Person 🐶\n");
    else
        printf("Pet Preference : Cat Person 🐱\n");

    printf("Complete Name  : %s\n", name);
    printf("Nickname       : %s\n", nickname);
    printf("Birthday       : %s\n", birthday);
    printf("Address        : %s\n", address);

    printf("\nFavorite Song  : %s\n", song);

    printf("\nThank you for participating in the\n");
    printf("\"Get To Know Me\" Program!\n");

    if(petChoice == 1)
        printf("\n🐶 Keep moving forward with determination!\n");
    else
        printf("\n🐱 Stay calm, curious, and confident!\n");

    printf("\n=========================================\n");
    printf("PROGRAM COMPLETED SUCCESSFULLY\n");
    printf("=========================================\n");
}