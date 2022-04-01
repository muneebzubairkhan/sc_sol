const anchor = require('@project-serum/anchor');
const assert = require("assert");

describe("sc_sol", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);

  const calculatorAccount = anchor.web3.Keypair.generate();
  const program = anchor.workspace.ScSol;

  it("Is initialized!", async () => {
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });

  it("Calculator created!", async () => {
    const tx = await program.rpc.createCalculatorSol("Assalamo Alaikum, Calculator created.", {
      accounts: {
        calculator: calculatorAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [calculatorAccount],
    });
    console.log("Your transaction signature", tx);
  });

  it("Add 2 numbers", async () => {
    const tx = await program.rpc.add(new anchor.BN(2), new anchor.BN(3), {
      accounts: {
        calculator: calculatorAccount.publicKey,
      },
    });
    console.log("Your transaction signature", tx);

    const account = await program.account.calculator.fetch(calculatorAccount.publicKey);
    assert.ok(account.result.eq(new anchor.BN(5)));
  });

  it("Divide 2 numbers", async () => {
    const tx = await program.rpc.div(new anchor.BN(5), new anchor.BN(2), {
      accounts: {
        calculator: calculatorAccount.publicKey,
      },
    });
    console.log("Your transaction signature", tx);

    const account = await program.account.calculator.fetch(calculatorAccount.publicKey);
    assert.ok(account.result.eq(new anchor.BN(2))); // quotient
    assert.ok(account.remainder.eq(new anchor.BN(1))); // remainder
  });
});
