use anchor_lang::prelude::*;

declare_id!("4DzTzA5yGGX9bF7fpScPmRKLEMfxqaLUuECBsMbH1kEt");

#[program]
pub mod sc_sol {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
