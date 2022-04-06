output on devent:

> Executing task: yarn run start <

yarn run v1.22.17
warning package.json: No license field
$ sudo anchor build && sudo anchor deploy && sudo anchor test
Password:
BPF SDK: /Users/mzk/.local/share/solana/install/releases/1.10.4/solana-release/bin/sdk/bpf
cargo-build-bpf child: rustup toolchain list -v
cargo-build-bpf child: cargo +bpf build --target bpfel-unknown-unknown --release
warning: unused variable: `ctx`
  --> programs/sc_sol/src/lib.rs:13:23
   |
13 |     pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
   |                       ^^^ help: if this is intentional, prefix it with an underscore: `_ctx`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: `sc_sol` (lib) generated 1 warning
    Finished release [optimized] target(s) in 0.20s
cargo-build-bpf child: /Users/mzk/.local/share/solana/install/releases/1.10.4/solana-release/bin/sdk/bpf/dependencies/bpf-tools/llvm/bin/llvm-readelf --dyn-symbols /Users/mzk/Desktop/sc_sol/target/deploy/sc_sol.so

To deploy this program:
  $ solana program deploy /Users/mzk/Desktop/sc_sol/target/deploy/sc_sol.so
The program address will default to this keypair (override with --program-id):
  /Users/mzk/Desktop/sc_sol/target/deploy/sc_sol-keypair.json
Deploying workspace: https://api.devnet.solana.com
Upgrade authority: /Users/mzk/.config/solana/id.json
Deploying program "sc_sol"...
Program path: /Users/mzk/Desktop/sc_sol/target/deploy/sc_sol.so...
Program Id: 4DzTzA5yGGX9bF7fpScPmRKLEMfxqaLUuECBsMbH1kEt

Deploy success
BPF SDK: /Users/mzk/.local/share/solana/install/releases/1.10.4/solana-release/bin/sdk/bpf
cargo-build-bpf child: rustup toolchain list -v
cargo-build-bpf child: cargo +bpf build --target bpfel-unknown-unknown --release
warning: unused variable: `ctx`
  --> programs/sc_sol/src/lib.rs:13:23
   |
13 |     pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
   |                       ^^^ help: if this is intentional, prefix it with an underscore: `_ctx`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: `sc_sol` (lib) generated 1 warning
    Finished release [optimized] target(s) in 0.20s
cargo-build-bpf child: /Users/mzk/.local/share/solana/install/releases/1.10.4/solana-release/bin/sdk/bpf/dependencies/bpf-tools/llvm/bin/llvm-readelf --dyn-symbols /Users/mzk/Desktop/sc_sol/target/deploy/sc_sol.so

To deploy this program:
  $ solana program deploy /Users/mzk/Desktop/sc_sol/target/deploy/sc_sol.so
The program address will default to this keypair (override with --program-id):
  /Users/mzk/Desktop/sc_sol/target/deploy/sc_sol-keypair.json
Deploying workspace: https://api.devnet.solana.com
Upgrade authority: /Users/mzk/.config/solana/id.json
Deploying program "sc_sol"...
Program path: /Users/mzk/Desktop/sc_sol/target/deploy/sc_sol.so...
Program Id: 4DzTzA5yGGX9bF7fpScPmRKLEMfxqaLUuECBsMbH1kEt

Deploy success


  sc_sol
Your transaction signature rdg8DYk8VfrWMuzF85L9nxPfMrfZKNvAhHseJR8HUZAXQWuWvvojAyZMQZi3ZYD7L2U5BvZueVwWrkE7GM9Twew
    ✔ Is initialized! (2679ms)
Your transaction signature 5YGqcAFWmrKypiX7EVe9VXwBXAAjY7WUqNMrMFNbBZJUa8UVTtVhpXe2BMnKmDcGCkJGpLM64SeX1xgr9vFVHEbz
    ✔ Calculator created! (2122ms)
Your transaction signature 3m8E5QwgvaRd2hUspWB9gL45Ly3YvDqGfSCRkYQYhgjmWkBxZHv4LGn6BzynkXoJAkrZzC17ptYdQE35dVstYtGp
    ✔ Add 2 numbers (2332ms)
Your transaction signature 2dZuqKET6fEnVpJSA9qhppfGEHxScJzAs5cVZMVEjdSp17rdeZgbeHrvdZbdLRbd4yvaYsBJ3SQN8zoLozLruJnh
    ✔ Divide 2 numbers (2323ms)


  4 passing (9s)

✨  Done in 105.04s.