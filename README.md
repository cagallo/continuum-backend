# Return Orders API

A simple TypeScript-based Node.js server that provides access to mock return order data.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build the TypeScript code:
```bash
npm run build
```

3. Start the server:
```bash
npm start
```

For development with automatic restart:
```bash
npm run dev
```

## API Endpoints

- `GET /`: Displays a welcome message
- `GET /getAllOrders`: Returns all 40 mock return orders

## Project Structure

```
return-orders-api/
├── src/
│   ├── types/
│   │   └── ReturnOrder.ts   # Type definition for ReturnOrder
│   ├── data/
│   │   └── returnOrders.ts  # Mock data
│   └── server.ts            # Express server setup
├── package.json
└── tsconfig.json
```

## Data Structure

Each return order contains the following fields:
- `rmaNumber` - Return Merchandise Authorization number
- `customerId` - Customer identifier
- `customerName` - Customer's full name
- `returnType` - Reason for return (Defective, Wrong Item, Damaged, Wrong Size)
- `createdDate` - Date the return was created
