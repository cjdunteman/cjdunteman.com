import express from "express";
import { paymentMiddleware, x402ResourceServer } from "@x402/express";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";

const app = express();

const evmAddress = "0xecea927A5df75641714418F4925A26f999DbB444";

// Create facilitator client (testnet)
const facilitatorClient = new HTTPFacilitatorClient({
  url: "https://x402.org/facilitator",
});

const server = new x402ResourceServer(facilitatorClient).register(
  "eip155:84532",
  new ExactEvmScheme(),
);

app.use(
  paymentMiddleware(
    {
      "GET /apipay": {
        accepts: [
          {
            scheme: "exact",
            price: "$0.001",
            network: "eip155:84532", // Base Sepolia
            payTo: evmAddress,
          },
        ],
        description: "Pay Me",
        mimeType: "application/json",
      },
    },
    server,
  ),
);

app.get("/api/pay", (req, res) => {
  res.send({
    pay: "Thank you!",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
