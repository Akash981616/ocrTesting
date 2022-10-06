const { response } = require("express");
const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json());
const clientData = [
  {
    status: 1,
    message: "List of invoices.",
    data: [
      {
        invoice_id: "6716",
        filename: "invoices_346316662.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_346316662.pdf",
        file_string: "lhjlhl",
      },
      {
        invoice_id: "6717",
        filename: "invoices_1925179172.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_1925179172.pdf",
        file_string: "jhgkjgblkj",
      },
      {
        invoice_id: "6718",
        filename: "invoices_678388695.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_678388695.pdf",
        file_string: "fsadfasdf",
      },
      {
        invoice_id: "6719",
        filename: "invoices_1191958078.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_1191958078.pdf",
        file_string: "fdsaf",
      },
      {
        invoice_id: "18730",
        filename: "invoices_913122702.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_913122702.pdf",
        file_string: "fgdsgfds",
      },
      {
        invoice_id: "100196",
        filename: "invoices_1479491311.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_1479491311.pdf",
        file_string: "hfgdhfg",
      },
      {
        invoice_id: "100197",
        filename: "invoices_1003520783.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_1003520783.pdf",
        file_string: "hgfhdfghfgh",
      },
      {
        invoice_id: "100198",
        filename: "invoices_1219525265.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_1219525265.pdf",
        file_string: "ghfdhgfhfd",
      },
      {
        invoice_id: "100199",
        filename: "invoices_156106450.pdf",
        file_url:
          "https://dashboard.stratafyconnect.com/uploads/invoice/invoices_156106450.pdf",
        file_string: "hgfdh",
      },
    ],
  },
];
const result = [];
const PORT = 3000;
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});

app.post(
  "/testingocr/sendingRes",
  asyncHandler((req, res) => {
    const response = req.body;
    result.push(response);
    res.send({ message: "get the results", response: response });
  })
);
app.get("/testingocr/", (req, res) => {
  res.send("sever is running");
});
app.get("/testingocr/clientData/", (req, res) => {
  res.send(clientData);
});
app.get("/result/", (req, res) => {
  res.send(result);
});
