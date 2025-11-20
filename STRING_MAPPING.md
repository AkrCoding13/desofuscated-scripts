# String Array Mapping Reference

This document provides a complete mapping of the obfuscated string array to actual values.

## String Array (`_0x1fbd`)

The obfuscated code uses an array to store all strings, accessed via the `_0x2b4e` function.

### Complete Mapping

| Index (Hex) | Index (Dec) | String Value |
|------------|------------|--------------|
| 0x0 | 0 | 'currency' |
| 0x1 | 1 | 'balance' |
| 0x2 | 2 | 'deposit' |
| 0x3 | 3 | 'withdraw' |
| 0x4 | 4 | 'transfer' |
| 0x5 | 5 | 'getBalance' |
| 0x6 | 6 | 'USD' |
| 0x7 | 7 | 'EUR' |
| 0x8 | 8 | 'GBP' |
| 0x9 | 9 | 'log' |
| 0xa | 10 | 'error' |
| 0xb | 11 | 'Insufficient' |
| 0xc | 12 | 'funds' |
| 0xd | 13 | 'Account' |
| 0xe | 14 | 'created' |
| 0xf | 15 | 'with' |
| 0x10 | 16 | 'initial' |
| 0x11 | 17 | 'amount' |
| 0x12 | 18 | 'Deposited' |
| 0x13 | 19 | 'to' |
| 0x14 | 20 | 'account' |
| 0x15 | 21 | 'Withdrawn' |
| 0x16 | 22 | 'from' |
| 0x17 | 23 | 'Transfer' |
| 0x18 | 24 | 'successful' |
| 0x19 | 25 | 'Invalid' |
| 0x1a | 26 | 'Cannot' |
| 0x1b | 27 | 'amount' |
| 0x1c | 28 | 'negative' |
| 0x1d | 29 | 'Transaction' |
| 0x1e | 30 | 'completed' |
| 0x1f | 31 | 'Current' |
| 0x20 | 32 | 'history' |
| 0x21 | 33 | 'transactions' |
| 0x22 | 34 | 'push' |
| 0x23 | 35 | 'type' |
| 0x24 | 36 | 'toString' |
| 0x25 | 37 | 'length' |

## Variable Name Mapping

### Class and Instance Names

| Obfuscated | Deobfuscated | Purpose |
|-----------|-------------|---------|
| `_0x8c3f` | `BankAccount` | Main class representing a bank account |
| `_0x3e7f` | `usdAccount` | USD currency account instance |
| `_0x2a9c` | `eurAccount` | EUR currency account instance |

### Constructor Parameters

| Obfuscated | Deobfuscated | Type | Description |
|-----------|-------------|------|-------------|
| `_0x1a2b` | `currency` | string | Currency code |
| `_0x4e9d` | `initialBalance` | number | Starting balance |

### Method Parameters

#### deposit() method
| Obfuscated | Deobfuscated | Type | Description |
|-----------|-------------|------|-------------|
| `_0x3c7e` | `amount` | number | Amount to deposit |

#### withdraw() method
| Obfuscated | Deobfuscated | Type | Description |
|-----------|-------------|------|-------------|
| `_0x2d8a` | `amount` | number | Amount to withdraw |

#### transfer() method
| Obfuscated | Deobfuscated | Type | Description |
|-----------|-------------|------|-------------|
| `_0x7f3e` | `targetAccount` | BankAccount | Destination account |
| `_0x9b2c` | `amount` | number | Amount to transfer |

## Function Wrapper Mapping

The obfuscated code wraps basic operators in functions. Here's the mapping:

| Obfuscated Function | Actual Operation | Example |
|--------------------|-----------------|---------|
| `_0x5a2d['_0x3f8a'](a, b)` | `a + b` | Addition |
| `_0x5a2d['_0x2c7b'](a, b)` | `a - b` | Subtraction |
| `_0x5a2d['_0x4d9e'](a, b)` | `a > b` | Greater than |
| `_0x5a2d['_0x6e1f'](a, b)` | `a < b` | Less than |

## Usage Examples

### Example 1: Accessing String Array

**Obfuscated:**
```javascript
_0x2b4e(0x0)  // Returns the string at index 0
```

**Deobfuscated:**
```javascript
'currency'  // Direct string value
```

### Example 2: Property Access

**Obfuscated:**
```javascript
this[_0x2b4e(0x1)] = _0x4e9d;
```

**Deobfuscated:**
```javascript
this.balance = initialBalance;
```

### Example 3: Method Call

**Obfuscated:**
```javascript
console[_0x2b4e(0x9)](_0x2b4e(0xd), _0x2b4e(0xe));
```

**Deobfuscated:**
```javascript
console.log('Account', 'created');
```

### Example 4: Operator Wrapping

**Obfuscated:**
```javascript
this[_0x2b4e(0x1)] = _0x5a2d['_0x3f8a'](this[_0x2b4e(0x1)], _0x3c7e);
```

**Deobfuscated:**
```javascript
this.balance = this.balance + amount;
```

## Deobfuscation Algorithm

To deobfuscate similar code:

1. **Extract the string array**: Identify the array containing all strings
2. **Map indices to values**: Create a lookup table
3. **Find the accessor function**: Locate how strings are retrieved (e.g., `_0x2b4e`)
4. **Replace all calls**: Substitute `_0x2b4e(0xN)` with actual string values
5. **Unwrap operators**: Replace function wrappers with actual operators
6. **Rename variables**: Use context to determine meaningful names
7. **Simplify structure**: Remove unnecessary IIFEs and wrappers
8. **Add documentation**: Document the purpose and usage

## Tools Used

- Manual static analysis
- Pattern recognition
- Context-based naming
- Incremental testing to verify equivalence

## Verification

After deobfuscation, both versions were tested to ensure:
- ✅ Identical console output
- ✅ Same transaction results
- ✅ Equivalent account balances
- ✅ Matching transaction histories
