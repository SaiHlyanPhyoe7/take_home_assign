This is a [Next.js](https://nextjs.org/) project with [`App directory`]

## Getting Started

First, run the development server:

```bash
# Package Install
npm install

# to run project
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# I implemented the Project as per Requirements

- [x] Card List:

  - [x] Implement search/filter:
    - [x] Name
    - [x] Type
    - [x] Rarity
    - [x] Set
  - [x] Loading/PageSize limit: `12` cards on each API call
  - [x] `Loadmore` style pagination

- [x] Card:

  - [x] Use `price` data from `cardmarket.prices.*`
  - [x] Use `stock` from `set.total`

- [x] Cart:
  - [x] Display selected cards as per design
  - [x] Quantity must be able to:
    - [x] Increase (respect the stock left limit)
    - [x] Decrease
    - [x] Remove
  - [x] Display the total number of selected cards
  - [x] Display the total price of all the cards
  - [x] All cards can be cleared at once from the cart

Addition:

- [x] Use strict **TypeScript**.
- [x] Build near pixel-perfect UIs
- [x] Responsive to any screen sizes
- [x] Smooth & Snappy CSS Transitions
- [x] Server-side Data Fetch using Next.js `App` directory with `route` enter/leave animation
- [x] Use React hooks
- [x] Maintain a well-structured and organized repository
- [x] Commenting the code for better understanding

Congratulations on completing all the requirements for your Next.js app! Great job!
