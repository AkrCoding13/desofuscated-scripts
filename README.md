# Deobfuscated Scripts

This repository demonstrates the process of deobfuscating JavaScript code to improve maintainability and security.

## 📁 Repository Structure

- **`monetary-system-obfuscated.js`** - Original obfuscated JavaScript code for a monetary system
- **`monetary-system.js`** - Deobfuscated, clean version with proper structure and documentation
- **`DEOBFUSCATION_GUIDE.md`** - Comprehensive guide explaining the deobfuscation process

## 🎯 Project Goals

This project demonstrates a step-by-step approach to deobfuscating JavaScript code:

1. **Decode obfuscated strings** - Map string arrays (`_0x2b4e`, `_0x1fbd`) to their actual values
2. **Rename variables and functions** - Replace cryptic names with meaningful identifiers
3. **Restructure and modularize** - Improve code organization and clarity
4. **Remove redundant logic** - Eliminate unnecessary obfuscation layers
5. **Add documentation** - Provide clear explanations and usage examples

## 🚀 Quick Start

### Run the Obfuscated Version
```bash
node monetary-system-obfuscated.js
```

### Run the Deobfuscated Version
```bash
node monetary-system.js
```

Both versions produce identical output, demonstrating functional equivalence.

## 📖 Features

The monetary system includes:
- ✅ Bank account creation with initial balance
- ✅ Deposit funds
- ✅ Withdraw funds with validation
- ✅ Transfer between accounts
- ✅ Transaction history tracking
- ✅ Balance inquiry

## 📚 Learn More

See [`DEOBFUSCATION_GUIDE.md`](./DEOBFUSCATION_GUIDE.md) for a detailed explanation of:
- Obfuscation techniques used
- Step-by-step deobfuscation process
- Variable and function mappings
- Security considerations
- Testing approach

## 🔍 Code Comparison

### Before (Obfuscated)
```javascript
[_0x2b4e(0x2)](_0x3c7e) {
    if (_0x5a2d['_0x6e1f'](_0x3c7e, 0x0)) {
        console[_0x2b4e(0xa)](_0x2b4e(0x19));
        return ![];
    }
    this[_0x2b4e(0x1)] = _0x5a2d['_0x3f8a'](this[_0x2b4e(0x1)], _0x3c7e);
}
```

### After (Deobfuscated)
```javascript
deposit(amount) {
    if (amount < 0) {
        console.error('Invalid Cannot negative amount');
        return false;
    }
    this.balance = this.balance + amount;
}
```

## 🛡️ Security

The deobfuscated code has been reviewed for:
- Input validation
- No malicious patterns
- Safe arithmetic operations
- No data exfiltration

## 📝 License

This is an educational project demonstrating JavaScript deobfuscation techniques.
