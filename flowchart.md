```mermaid
graph TD;
    A[Start] --> B[Generate a Random Number];
    B --> C[Prompt User for a Guess];
    C --> D{Is the Input a Number?};
    D -- No --> E[Show Error Message and Prompt Again];
    E --> C;
    D -- Yes --> F{Is the Guess Correct?};
    F -- Yes --> G[Display "Correct!"];
    G --> H[End];
    F -- No --> I{Is the Guess Too High?};
    I -- Yes --> J[Display "Too High"];
    I -- No --> K[Display "Too Low"];
    J --> C;
    K --> C;
```
