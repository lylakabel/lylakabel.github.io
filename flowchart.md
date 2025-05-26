```mermaid
flowchart TD
    A([Start]) --> B[Generate Random Number];
    B --> C[Prompt User for a Guess];
    C --> D{Is Input a Number?};
    D -- No --> E[Display Error Message<br>"Invalid input"];
    E --> C;
    D -- Yes --> F{Guess == Target Number?};
    F -- Yes --> G[Display "Correct!"];
    G --> H([End]);
    F -- No --> I{Guess > Target?};
    I -- Yes --> J[Display "Too High"];
    I -- No --> K[Display "Too Low"];
    J --> C;
    K --> C;
```
