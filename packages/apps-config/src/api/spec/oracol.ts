// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
        {
            BalanceInfo: 'null',
            BalanceLock: {
                id: 'LockIdentifier',
                lock_for: 'LockFor',
                lock_reasons: 'LockReasons',
                amount: 'Balance',
                reasons: 'Reasons'
            },
            LockFor: {
                _enum: {
                    Common: 'Common',
                    Staking: 'StakingLock'
                }
            },
            Common: {
                amount: 'Balance'
            },
            StakingLock: {
                staking_amount: 'Balance',
                unbondings: 'Vec<Unbonding>'
            },
            LockReasons: {
                _enum: {
                    Fee: 'null',
                    Misc: 'null',
                    All: 'null'
                }
            },
            Unbonding: {
                amount: 'Balance',
                until: 'BlockNumber'
            },
            AccountData: {
                free: 'Balance',
                reserved: 'Balance',
                free_oxor: 'Balance',
                reserved_oxor: 'Balance',
                misc_frozen: 'Balance',
                fee_frozen: 'Balance'
            },
           
            XorBalance: 'Balance',
            OxorBalance: 'Balance',
            TsInMs: 'u64',
            Power: 'u32',
            DepositId: 'U256',
            StakingBalanceT: {
                _enum: {
                    XorBalance: 'Balance',
                    OxorBalance: 'Balance'
                }
            },
            StakingLedgerT: {
                stash: 'AccountId',
                active_xor: 'Compact<Balance>',
                active_deposit_xor: 'Compact<Balance>',
                active_oxor: 'Compact<Balance>',
                deposit_items: 'Vec<TimeDepositItem>',
                xor_staking_lock: 'StakingLock',
                oxor_staking_lock: 'StakingLock',
                claimed_rewards: 'Vec<EraIndex>',
                total: 'Compact<Balance>',
                active: 'Compact<Balance>',
                unlocking: 'Vec<UnlockChunk>'
            },
            TimeDepositItem: {
                value: 'Compact<Balance>',
                start_time: 'Compact<TsInMs>',
                expire_time: 'Compact<TsInMs>'
            },
      
        }
        
    
  ]
};

export default definitions;
