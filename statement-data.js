const statementData = {
  statementNumber: "8",
  statementPeriod: "28 JANUARY 2023 TO 28 FEBRUARY 2023",
  customerName: "Ms Michaela Finnegan",
  customerAddress: "12 Wilfrid St, Macquarie Fields NSW 2564",
  bsb: "012-327",
  accountNumber: "123456789",
  openingBalance: 10264.69,
  totalDeposits: 7405.41,
  totalWithdrawals: 3535.0,
  closingBalance: 14135.1,
  transactions: [
    {
      date: "28 JAN",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 100.0,
      balance: 10364.69,
    },
    {
      date: "31 JAN",
      details: "ANZ INTERNET BANKING TRANSFER WAGES 31032020 CLEANING EDGE SO",
      withdrawal: null,
      deposit: 947.39,
      balance: 11312.08,
    },
    {
      date: "01 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 50.0,
      balance: 11362.08,
    },
    {
      date: "01 FEB",
      details:
        "REVERSAL OF ACCOUNT SERVICING FEE MINIMUM $2000 IN DEPOSITS RECEIVED",
      withdrawal: null,
      deposit: 5.0,
      balance: 11367.08,
    },
    {
      date: "02 FEB",
      details: "ACCOUNT SERVICING FEE",
      withdrawal: 5.0,
      deposit: null,
      balance: 11362.08,
    },
    {
      date: "03 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680 EFFECTIVE DATE 03 FEB 2023",
      withdrawal: null,
      deposit: 20.0,
      balance: 11382.08,
    },
    {
      date: "03 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680 EFFECTIVE DATE 03 FEB 2023",
      withdrawal: null,
      deposit: 50.0,
      balance: 11432.08,
    },
    {
      date: "04 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 30.0,
      balance: 11462.08,
    },
    {
      date: "04 FEB",
      details: "TRANSFER FROM NASARUDIN N N MAKAN RUMAH HUTANG",
      withdrawal: null,
      deposit: 165.5,
      balance: 11627.58,
    },
    {
      date: "05 FEB",
      details: "ANZ MOBILE BANKING PAYMENT 770177 TO SAPIODIN L H",
      withdrawal: 50.0,
      deposit: null,
      balance: 11577.58,
    },
    {
      date: "05 FEB",
      details: "ANZ MOBILE BANKING PAYMENT 387663 TO SAPIODIN L H",
      withdrawal: 75.0,
      deposit: null,
      balance: 11502.58,
    },
    {
      date: "06 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 50.0,
      balance: 11552.58,
    },
    {
      date: "07 FEB",
      details: "ANZ INTERNET BANKING TRANSFER WAGES 07042020 CLEANING EDGE SO",
      withdrawal: null,
      deposit: 1266.66,
      balance: 12819.24,
    },
    {
      date: "08 FEB",
      details: "ANZ MOBILE BANKING PAYMENT 384025 TO FAUZIAH SAPIODIN",
      withdrawal: 200.0,
      deposit: null,
      balance: 12619.24,
    },
    {
      date: "09 FEB",
      details: "ANZ ATM CARD 9655",
      withdrawal: null,
      deposit: 20.0,
      balance: 12639.24,
    },
    {
      date: "09 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 50.0,
      balance: 12689.24,
    },
    {
      date: "10 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 50.0,
      balance: 12739.24,
    },
    {
      date: "11 FEB",
      details: "ANZ ATM BRANCH GRIFFITHNS 2680 EFFECTIVE DATE 11 APR 2020",
      withdrawal: null,
      deposit: 70.0,
      balance: 12809.24,
    },
    {
      date: "12 FEB",
      details:
        "PAYMENT FROM MOHD NOOR AKHERY BIN MOHAME EFFECTIVE DATE 12 FEB 2023",
      withdrawal: null,
      deposit: 30.0,
      balance: 12839.24,
    },
    {
      date: "12 FEB",
      details: "ANZ ATM GRIFFITH BRANCH GRIFFITH NS EFFECTIVE DATE 12 FEB 2023",
      withdrawal: 500.0,
      deposit: null,
      balance: 12339.24,
    },
    {
      date: "14 FEB",
      details: "ANZ ATM GRIFFITH BRANCH GRIFFITH NS",
      withdrawal: 300.0,
      deposit: null,
      balance: 12039.24,
    },
    {
      date: "14 FEB",
      details: "ANZ INTERNET BANKING TRANSFER WAGES 14042020 CLEANING EDGE SO",
      withdrawal: null,
      deposit: 1294.09,
      balance: 13333.33,
    },
    {
      date: "15 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 50.0,
      balance: 13383.33,
    },
    {
      date: "16 FEB",
      details: "ANZ M-BANKING FUNDS TFER TRANSFER 211328 TO 012125319116005",
      withdrawal: 500.0,
      deposit: null,
      balance: 12883.33,
    },
    {
      date: "17 FEB",
      details: "ACCOUNT SERVICING FEE MINIMUM $2000 IN DEPOSITS NOT RECEIVED",
      withdrawal: 5.0,
      deposit: null,
      balance: 12878.33,
    },
    {
      date: "17 FEB",
      details: "ANZ MOBILE BANKING PAYMENT 950308 TO NASARUDIN N N",
      withdrawal: 400.0,
      deposit: null,
      balance: 12478.33,
    },
    {
      date: "21 FEB",
      details: "ANZ INTERNET BANKING TRANSFER WAGES 21042020 CLEANING EDGE SO",
      withdrawal: null,
      deposit: 1132.01,
      balance: 13610.34,
    },
    {
      date: "22 FEB",
      details: "ANZ M-BANKING FUNDS TFER TRANSFER 445763 FROM 319116005",
      withdrawal: null,
      deposit: 100.0,
      balance: 13710.34,
    },
    {
      date: "22 FEB",
      details: "ANZ ATM GRIFFITH BRANCH GRIFFITH NS",
      withdrawal: 500.0,
      deposit: null,
      balance: 13210.34,
    },
    {
      date: "23 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 60.0,
      balance: 13270.34,
    },
    {
      date: "23 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 50.0,
      balance: 13320.34,
    },
    {
      date: "24 FEB",
      details: "ANZ ATM CARD 9077",
      withdrawal: null,
      deposit: 30.0,
      balance: 13350.34,
    },
    {
      date: "25 FEB",
      details: "ANZ ATM CARD 9655",
      withdrawal: null,
      deposit: 20.0,
      balance: 13370.34,
    },
    {
      date: "26 FEB",
      details: "TRANSFER FROM ATM GRIFFITH EFFECTIVE DATE 26 FEB 2020",
      withdrawal: null,
      deposit: 100.0,
      balance: 13470.34,
    },
    {
      date: "26 FEB",
      details: "TRANSFER FROM ATM GRIFFITH GRIFFITH BRANCH GRIFFITH NS",
      withdrawal: null,
      deposit: 100.0,
      balance: 13570.34,
    },
    {
      date: "28 FEB",
      details:
        "ANZ INTERNET BANKING TRANSFER WAGES 21042020 CLEANING EDGE SO EFFECTIVE 28 FEB 2023",
      withdrawal: null,
      deposit: 1114.76,
      balance: 14685.1,
    },
    {
      date: "28 FEB",
      details: "ANZ ATM GRIFFITH BRANCH GRIFFITH NS EFFECTIVE DATE 28 FEB 2023",
      withdrawal: 550.0,
      deposit: null,
      balance: 14135.1,
    },
    {
      date: "28 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 20.0,
      balance: 14155.1,
    },
    {
      date: "28 FEB",
      details: "ANZ ATM CARD 9077",
      withdrawal: null,
      deposit: 100.0,
      balance: 14255.1,
    },
    {
      date: "28 FEB",
      details: "ANZ ATM CARD 9077",
      withdrawal: null,
      deposit: 50.0,
      balance: 14305.1,
    },
    {
      date: "28 FEB",
      details: "ANZ ATM GRIFFITH BRANCH GRIFFITH NS",
      withdrawal: 450.0,
      deposit: null,
      balance: 13855.1,
    },
    {
      date: "28 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 50.0,
      balance: 13905.1,
    },
    {
      date: "28 FEB",
      details: "ANZ ATM CARD 9655",
      withdrawal: null,
      deposit: 80.0,
      balance: 13985.1,
    },
    {
      date: "28 FEB",
      details: "ANZ M-BANKING FUNDS TFER TRANSFER 339669 FROM 319116005",
      withdrawal: null,
      deposit: 50.0,
      balance: 14035.1,
    },
    {
      date: "28 FEB",
      details: "ANZ ATM BRANCH GRIFFITH NS 2680",
      withdrawal: null,
      deposit: 100.0,
      balance: 14135.1,
    },
  ],
};

module.exports = statementData;
