import test from 'node:test'
import assert from 'node:assert/strict'
import { contrast, cssVars, filterExamples, isHex, textOn, validateMessage } from '../src/lib/theme.js'
test('contrast reference values', () => { assert.equal(Math.round(contrast('#000000', '#ffffff')), 21); assert.equal(contrast('#ffffff', '#ffffff'), 1) })
test('textOn picks readable text', () => { assert.equal(textOn('#ffffff'), '#111111'); assert.equal(textOn('#1f1b3a'), '#ffffff'); assert.equal(textOn('#1abc9c'), '#111111') })
test('isHex', () => { assert.ok(isHex('#AbC123')); assert.ok(!isHex('#abc')); assert.ok(!isHex('red')) })
test('cssVars', () => assert.match(cssVars({ primary: '#1abc9c', dark: '#2c3e50', radius: 12 }), /--sf-primary: #1abc9c;[\s\S]*--sf-radius: 12px;/))
test('validateMessage', () => { assert.deepEqual(Object.keys(validateMessage({})).sort(), ['email', 'message', 'name']); assert.deepEqual(validateMessage({ name: 'Malak', email: 'a@b.co', message: 'Hello world!!' }), {}) })
test('filterExamples', () => { assert.equal(filterExamples('All').length, 6); assert.equal(filterExamples('Brand').length, 3) })
